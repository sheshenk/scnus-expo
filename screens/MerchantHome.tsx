import { useContext } from "react"
import { ScrollView } from "react-native"
import { Text, View } from "react-native-ui-lib"
import HomeHeader from "../components/home/HomeHeader"
import TotalDiscountCard from "../components/merchants/TotalDiscountCard"
import { UserContext } from "../services/userContext"


export default function MerchantHome() {
	const {user, setUser} = useContext(UserContext)
	if (user === undefined) return <></>
	return (
		<ScrollView>
			<View paddingB-130>
				<HomeHeader/>
				<TotalDiscountCard/>
			</View>
		</ScrollView>
	)
}