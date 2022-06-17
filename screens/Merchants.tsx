import { Text, View } from "react-native-ui-lib"
import COLORS from "../constants/colors"

export default function Tokens({navigation}) {
	return (
		<View>
			<View paddingT-60 paddingB-20 paddingH-20 backgroundColor={COLORS.secondary}>
				<Text color='white' text30>Merchants</Text>
				<Text color='white' text70>Visit our partnered merchants to redeem rewards.</Text>
			</View>
		</View>
	)
}