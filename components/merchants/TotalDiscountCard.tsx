import { useContext } from "react"
import { Card, Text, View } from "react-native-ui-lib"
import COLORS from "../../constants/colors"
import { UserContext } from "../../services/userContext"

function TotalDiscountCard() {
	const { user } = useContext(UserContext)
	if (!user) return 
	return (
		<View marginT-10 padding-20>
			<Text text60 marginB-20 color={COLORS.secondary}>Discounts</Text>
			<Card paddingH-25 paddingV-30>
				<Text ciki text30 marginB-10 color={COLORS.secondary}>S$ {user.discount.toFixed(2)}</Text>
				<Text text60 color="gray" style={{fontWeight: '400'}}>S$ {user.discountToday.toFixed(2)} today</Text>
			</Card>
		</View>
	)
}

export default TotalDiscountCard