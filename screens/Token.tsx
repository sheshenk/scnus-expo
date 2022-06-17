import { Button, Card, Icon, Image, Shadows, Text, TouchableOpacity, View } from "react-native-ui-lib";
import IMAGES from "../constants/images";

export default function Token({route, navigation}) {
	const { item } = route.params
	return (
		<View paddingT-70 paddingB-20 paddingH-30>
			<TouchableOpacity onPress={navigation.goBack}>
				<Icon source={IMAGES.back} size={40}/>
			</TouchableOpacity>
			<Card style={{ width: '80%', shadowOpacity: 1, shadowRadius: 10, borderRadius: 24 }} marginT-40>
				<View style={{borderRadius: 20, overflow: 'hidden'}}>
					<Image source={item.image} style={{ width: '100%', height: 0, paddingTop: '100%'}}/>
				</View>
			</Card>
			<Text marginT-50 text30>{item.name}</Text>
			<Text marginT-20 text60 color='grey' style={{fontWeight: 'normal'}}>{item.description}</Text>
			<Button style={{width: 150}} backgroundColor="#F3904F" marginT-50 label="Visit" iconSource={IMAGES.browser} iconStyle={{width: 20, height: 20}}/>
			<Button style={{width: 150}} backgroundColor="#3B4371" marginT-10 label="Share" iconSource={IMAGES.share} iconStyle={{width: 20, height: 20}}/>
		</View>
	)
}