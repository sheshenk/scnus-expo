import { Button, Card, Icon, Image, Shadows, Text, TouchableOpacity, View } from "react-native-ui-lib";
import IMAGES from "../constants/images";

export default function Merchant({route, navigation}) {
	const { item } = route.params
	return (
		<View paddingT-70 paddingB-20 paddingH-30>
			<TouchableOpacity onPress={navigation.goBack}>
				<Icon source={IMAGES.back} size={40}/>
			</TouchableOpacity>
			<Text marginT-50 text30>{item.name}</Text>
			<Text marginT-20 text50 color='grey' style={{fontWeight: 'normal'}}>{item.location}</Text>
		</View>
	)
}