import { useEffect, useState } from "react"
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Text } from "react-native-ui-lib"
import { Alert, StyleSheet } from "react-native"
import { useMutation } from "@apollo/client"
import { VERIFY_REWARD } from '../../queries/verify'
import { useNavigation } from "@react-navigation/native"

export default function RewardScanner() {
	const navigation = useNavigation()
	const [hasPermission, setHasPermission] = useState<boolean | null>(null)
	const [scanned, setScanned] = useState(false)

	const [verifyReward] = useMutation(VERIFY_REWARD, {
		onCompleted: ({ verifyReward }) => {
			if (verifyReward.response) {
				const dets = verifyReward.response.split('-')
				setScanned(false)
				navigation.navigate('Transaction', { customerId: dets[0], discount: parseFloat(dets[1]) })
			} else {
				Alert.alert('Error scanning QR code', verifyReward.error, [ { text: 'OK', onPress: () => setScanned(false)}], { cancelable: false })
			}
		}
	})

	useEffect(() => {
		(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync()
			setHasPermission(status === 'granted')
		})()
	}, [])

	useEffect(() => {
		setScanned(false)
	}, [navigation])

	const handleBarCodeScanned = ({ data }) => {
		setScanned(true)
		verifyReward({ variables: { token: data }})
	}

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>
	}

	return <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={StyleSheet.absoluteFillObject}/>
}