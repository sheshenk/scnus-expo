import { useNavigation } from "@react-navigation/native"
import { FlatList } from "react-native"
import { Text, View } from "react-native-ui-lib"
import RecentlyCollectedItem from "./RecentlyCollectedItem"

export default function RecentlyCollectedGrid(props) {
	const navigation = useNavigation()
	return (
		<View style={{position: 'absolute', bottom: '-55%', width:'100%'}}>
			<Text marginL-20 text60 color='white' marginB-20>Recently Collected</Text>
			<FlatList
				contentContainerStyle={{paddingHorizontal: 20}} 
				data={props.tokens} 
				renderItem={({item}) => (
					<RecentlyCollectedItem item={item} onPress={() => navigation.navigate('Token', { item })}/>
				)}
				keyExtractor={(item, i) => `${i}`} 
				horizontal 
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	)
}