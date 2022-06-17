import { Card, ProgressBar, Text, View } from "react-native-ui-lib"
import COLORS from "../../constants/colors"

export default function TierSection() {
	return (
		<View style={{top: '30%'}} margin-20>
			<Text text60 marginB-20 color={COLORS.secondary}>Progress</Text>
			<Card paddingH-25 paddingV-30>
				<Text ciki text30 marginB-10 color={COLORS.secondary}>Bronze</Text>
				<ProgressBar progress={80} progressColor={COLORS.primary} style={{height: 20}}/>
				<Text text80 marginT-20 color="gray">Collect 2 more NFTs to reach Silver</Text>
			</Card>
		</View>
	)
}