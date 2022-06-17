import { StyleSheet } from "react-native"
import { Image, ListItem, Text, View } from "react-native-ui-lib"
import COLORS from "../../constants/colors"

export default function TokenListItem({item, onPress}) {
	return (
		<ListItem activeBackgroundColor='#eeeeee' marginT-12 activeOpacity={0.5} style={{height: 120}} onPress={onPress}>
			<ListItem.Part left>
				<Image source={item.image} style={styles.image}/>
			</ListItem.Part>
			<ListItem.Part middle>
				<View paddingL-6 paddingR-32>
					<Text color={COLORS.secondary} text60>{item.name}</Text>
					<Text color={COLORS.secondary} marginT-10 numberOfLines={3}>{item.description}</Text>
				</View>
			</ListItem.Part>
		</ListItem>
	)
}

const styles = StyleSheet.create({
	image: {
		width: 110,
		height: 110,
		borderRadius: 20,
		marginHorizontal: 14
	}
})