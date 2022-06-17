import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { ScrollView } from "react-native"
import { Text, View } from "react-native-ui-lib"
import HomeHeader from "../components/home/HomeHeader"
import TierSection from "../components/home/TierSection"
import { HOME_QUERY } from '../queries/home'

export default function Home() {
	const [user, setUser] = useState(null)
	const {loading, data} = useQuery(HOME_QUERY)

	useEffect(() => {
		if (data && data.currentUser) setUser(data.currentUser)
	}, [loading, data])

	if (!user) return <></>

	return (
		<ScrollView>
			<View paddingB-130>
				<HomeHeader user={user}/>
				<TierSection user={user}/>
			</View>
		</ScrollView>
	)
}