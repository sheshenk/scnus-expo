import { ScrollView } from "react-native"
import { View } from "react-native-ui-lib"
import HomeHeader from "../components/home/HomeHeader"
import TierSection from "../components/home/TierSection"

export default function Home(props) {
	return (
		<ScrollView>
			<View paddingB-130>
				<HomeHeader {...props}/>
				<TierSection/>
			</View>
		</ScrollView>
	)
}