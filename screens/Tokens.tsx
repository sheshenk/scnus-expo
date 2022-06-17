import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { FlatList } from "react-native"
import { Text, View } from "react-native-ui-lib"
import TokenListItem from "../components/token/TokenListItem"
import COLORS from "../constants/colors"
import TOKENS from "../constants/tokens"
import { CURRENT_TOKENS } from '../queries/tokens'

export default function Tokens({navigation}) {
	const [tokens, setTokens] = useState([])
	const [currentTokenIds, setCurrentTokenIds] = useState([])
	const {loading, data} = useQuery(CURRENT_TOKENS)

	useEffect(() => {
		if (data && data.currentUser && data.readTokens) {
			setCurrentTokenIds(data.currentUser.tokens.map(t => t._id))
			var toks = [...data.readTokens]
			toks = toks.sort((a, b) => ( (+ currentTokenIds.includes(b._id)) - (+ currentTokenIds.includes(a._id)) ))
			setTokens(toks)
		}
	}, [loading, data])

	if (!tokens) return <></>

	return (
		<View>
			<View paddingT-60 paddingB-20 paddingH-20 backgroundColor={COLORS.primary}>
				<Text color='white' text30>Your Tokens</Text>
				<Text color='white' text70>Collect tokens to unlock rewards.</Text>
			</View>
			<FlatList contentContainerStyle={{paddingBottom: 300}} data={tokens} renderItem={({item}) => (
				<TokenListItem isOwned={currentTokenIds.includes(item._id)} item={item} onPress={() => navigation.navigate('Token', { item })}/>
			)}/>
		</View>
	)
}