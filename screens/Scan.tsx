import { View } from "react-native-ui-lib"
import TokenScanner from "../components/scan/TokenScanner"

export default function Scan({navigation}) {

	return (
		<View style={{width: '100%', height: '100%'}} marginT-60>
			<TokenScanner/>
		</View>
	)
}