import { Card, ProgressBar, Text, View } from "react-native-ui-lib"
import COLORS from "../../constants/colors"

const tiers = [
	{
		name: 'No Tier',
		tokenReq: 0,
		discount: 0,
	},
	{
		name: 'Bronze',
		tokenReq: 5,
		discount: 10,
	},
	{
		name: 'Silver',
		tokenReq: 10,
		discount: 20,
	},
	{
		name: 'Gold',
		tokenReq: 15,
		discount: 30,
	},
]

export default function TierSection({user}) {
	const currentTokenCount = user.tokens.length
	const currentTier = tiers.filter(t => t.tokenReq < currentTokenCount).reverse()[0]
	const nextTier = tiers.filter(t => t.tokenReq > currentTokenCount)[0]
	return (
		<View style={{top: '30%'}} margin-20>
			<Text text60 marginB-20 color={COLORS.secondary}>Progress</Text>
			<Card paddingH-25 paddingV-30>
				<Text ciki text30 marginB-10 color={COLORS.secondary}>{currentTier.name}</Text>
				<ProgressBar progress={100 * ((user.tokens.length - currentTier.tokenReq) / (nextTier.tokenReq - currentTier.tokenReq))} progressColor={COLORS.primary} style={{height: 20}}/>
				<Text text80 marginT-20 color="gray">Collect {nextTier.tokenReq - user.tokens.length} more NFTs to reach Silver</Text>
			</Card>
		</View>
	)
}