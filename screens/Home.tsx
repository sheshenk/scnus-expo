import { useLazyQuery, useQuery } from "@apollo/client"
import { useContext, useEffect } from "react"
import { ScrollView } from "react-native"
import { View } from "react-native-ui-lib"
import HomeHeader from "../components/home/HomeHeader"
import TierSection from "../components/home/TierSection"
import { CURRENT_USER } from "../queries/auth"
import { UserContext } from "../services/userContext"


export default function Home() {
	const {user, setUser} = useContext(UserContext)
	
	if (user === undefined) return <></>

	return (
		<ScrollView>
			<View paddingB-130>
				<HomeHeader/>
				<TierSection/>
			</View>
		</ScrollView>
	)
}