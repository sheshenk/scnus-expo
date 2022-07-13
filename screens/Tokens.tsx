import { useQuery } from "@apollo/client"
import { useContext, useEffect, useState } from "react"
import { FlatList } from "react-native"
import { Text, View } from "react-native-ui-lib"
import TokenListItem from "../components/token/TokenListItem"
import COLORS from "../constants/colors"
import { CURRENT_TOKENS } from '../queries/tokens'
import { UserContext } from "../services/userContext"


export default function Tokens({navigation}) {
	const [tokens, setTokens] = useState([])
	const {user} = useContext(UserContext)
	const {data} = useQuery(CURRENT_TOKENS)

	useEffect(() => {
		if (user && data && data.readTokens) {
			var toks = [...data.readTokens.map(x => ({...x, owned: user.tokens.map(t => t._id).includes(x._id)}))]
			toks.sort((x, y) => x.owned && !y.owned ? -1 : x.owned && y.owned ? 0 : 1)
			setTokens(toks)
		}
	}, [data, user])

	if (!user && !user.tokens) return <></>

	return (
		<View>
			<View paddingT-60 paddingB-20 paddingH-20 backgroundColor={COLORS.primary}>
				<Text color='white' text30>Your Tokens</Text>
				<Text color='white' text70>Collect tokens to unlock rewards.</Text>
			</View>
			<FlatList contentContainerStyle={{paddingBottom: 300}} data={tokens} renderItem={({item}) => (
				<TokenListItem isOwned={user.tokens.map(t => t._id).includes(item._id)} item={item} onPress={() => navigation.navigate('Token', { item })}/>
			)}/>
		</View>
	)
}