import { FlatList } from "react-native"
import { Text, View } from "react-native-ui-lib"
import TokenListItem from "../components/token/TokenListItem"
import COLORS from "../constants/colors"
import TOKENS from "../constants/tokens"

export default function Tokens({navigation}) {
	return (
		<View>
			<View paddingT-60 paddingB-20 paddingH-20 backgroundColor={COLORS.primary}>
				<Text color='white' text30>Your Tokens</Text>
				<Text color='white' text70>Collect tokens to unlock rewards.</Text>
			</View>
			<FlatList style={{paddingBottom: 230}} data={TOKENS} renderItem={({item}) => (
				<TokenListItem item={item} onPress={() => navigation.navigate('Token', { item })}/>
			)}/>
		</View>
	)
}