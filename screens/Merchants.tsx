import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { FlatList } from "react-native"
import { ListItem, Text, View } from "react-native-ui-lib"
import COLORS from "../constants/colors"
import { GET_MERCHANTS_LIST } from "../queries/merchants"

export default function Merchants({navigation}) {
	const [merchants, setMerchants] = useState([])
	const { data } = useQuery(GET_MERCHANTS_LIST)
	useEffect(() => {
		if (data && data.readMerchants) setMerchants(data.readMerchants)
	}, [data])
	return (
		<View>
			<View paddingT-60 paddingB-20 paddingH-20 backgroundColor={COLORS.secondary}>
				<Text color='white' text30>Merchants</Text>
				<Text color='white' text70>Visit our partnered merchants to redeem rewards.</Text>
			</View>
			<FlatList contentContainerStyle={{paddingBottom: 300}} data={merchants} renderItem={({item}) => (
				<ListItem padding-20 activeBackgroundColor="#eee" marginT-12 activeOpacity={0.5} style={{ height: 80 }} onPress={() => navigation.navigate('Merchant', { item })}>
					<View>
						<Text text60>{item.name}</Text>
						<Text text70>{item.location}</Text>
					</View>
				</ListItem> 
			)}/>
		</View>
	)
}