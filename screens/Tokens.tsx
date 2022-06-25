import { useQuery } from "@apollo/client"
import { useContext, useEffect, useState } from "react"
import { FlatList } from "react-native"
import { Text, View } from "react-native-ui-lib"
import TokenListItem from "../components/token/TokenListItem"
import COLORS from "../constants/colors"
import { CURRENT_TOKENS } from '../queries/tokens'
import { UserContext } from "../services/userContext"


export default function Tokens({navigation}) {
	const [unownedTokens, setUnownedTokens] = useState([])
	const {user, setUser} = useContext(UserContext)
	const {data} = useQuery(CURRENT_TOKENS)
	const tokens = user && user.tokens ? user.tokens : []

	useEffect(() => {
		if (data && data.readTokens) {
			setUnownedTokens(data.readTokens)
		}
	}, [data])

	useEffect(() => {
		setUnownedTokens(unownedTokens.filter(t => !tokens.map(t => t._id).includes(t._id)))
	}, [data, tokens])

	return (
		<View>
			<View paddingT-60 paddingB-20 paddingH-20 backgroundColor={COLORS.primary}>
				<Text color='white' text30>Your Tokens</Text>
				<Text color='white' text70>Collect tokens to unlock rewards.</Text>
			</View>
			<FlatList contentContainerStyle={{paddingBottom: 300}} data={[...tokens, ...unownedTokens]} renderItem={({item}) => (
				<TokenListItem isOwned={tokens.map(t => t._id).includes(item._id)} item={item} onPress={() => navigation.navigate('Token', { item })}/>
			)}/>
		</View>
	)
}