import { useEffect, useState } from "react"
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Dialog, PanningProvider, Text } from "react-native-ui-lib"
import { StyleSheet } from "react-native"

export default function TokenScanner() {
	const [hasPermission, setHasPermission] = useState<boolean | null>(null)
	const [scanned, setScanned] = useState(false)
	const [scannedData, setScannedData] = useState('')

	useEffect(() => {
		(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync()
			setHasPermission(status === 'granted')
		})()
	}, [])

	const handleBarCodeScanned = ({ type, data }) => {
		setScannedData(data)
		setScanned(true)
	}

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>
	}

	return (
		<>
			<Dialog visible={scanned} onDismiss={() => setScanned(false)} panDirection={PanningProvider.Directions.DOWN}>
				{<Text text60 white>{scannedData}</Text>}
			</Dialog>
			<BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={StyleSheet.absoluteFillObject}/>
		</>
	)
}