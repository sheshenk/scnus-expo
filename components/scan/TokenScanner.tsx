import { useContext, useEffect, useState } from "react"
import { BarCodeScanner } from 'expo-barcode-scanner'
import { useMutation, useQuery } from "@apollo/client"
import { ADD_TOKEN_TO_CURR_USER, CURRENT_TOKENS } from "../../queries/tokens"
import { useNavigation } from "@react-navigation/native"
import { UserContext } from "../../services/userContext"
import { Text } from "react-native-ui-lib"
import { StyleSheet } from "react-native"

export default function TokenScanner() {
	const navigation = useNavigation()
	const {user, setUser} = useContext(UserContext)
	const [hasPermission, setHasPermission] = useState<boolean | null>(null)
	const [scanned, setScanned] = useState(false)
	const [unownedTokens, setUnownedTokens] = useState([])
	const { data } = useQuery(CURRENT_TOKENS)

	const [addTokenToCurrentUser] = useMutation(ADD_TOKEN_TO_CURR_USER, {
		onCompleted: ({ addTokenToCurrentUser }) => {
			const tokenId = addTokenToCurrentUser.response
			if (tokenId) {
				const item = unownedTokens.find(t => t._id === tokenId)
				setUser({...user, tokens: [item, ...user.tokens]})
				navigation.navigate('Token', { item })
				setScanned(false)
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
		if (data) setUnownedTokens(data.readTokens)
	}, [data])

	useEffect(() => {
		setUnownedTokens(unownedTokens.filter(t => !user.tokens.map(t => t._id).includes(t._id)))
	}, [user.tokens])

	const handleBarCodeScanned = ({ data }) => {
		if (unownedTokens.map(t => t._id).includes(data)) {
			setScanned(true)
			addTokenToCurrentUser({ variables: { _id: data} })
		}
	}

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>
	}

	return <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={StyleSheet.absoluteFillObject}/>
}