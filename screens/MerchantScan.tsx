import { View } from "react-native-ui-lib"
import RewardScanner from "../components/scan/RewardScanner"
import TokenScanner from "../components/scan/TokenScanner"

export default function MerchantScan({navigation}) {

	return (
		<View style={{width: '100%', height: '100%'}} marginT-60>
			<RewardScanner/>
		</View>
	)
}