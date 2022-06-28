import { useNavigation } from "@react-navigation/native"
import { useContext } from "react"
import { Card, Icon, Text, TouchableOpacity, View } from "react-native-ui-lib"
import IMAGES from "../constants/images"
import { UserContext } from "../services/userContext"
import QRCode from 'react-native-qrcode-svg'
import jwt from 'expo-jwt'
import { ScrollView } from "react-native"

function RewardQR({route, navigation}) {
	const tier = route.params.tier
	const { user } = useContext(UserContext)
	if (!user) return <></>
	return (
		<ScrollView style={{ paddingTop: 70, paddingBottom: 20, paddingHorizontal: 30}}>
			<TouchableOpacity onPress={navigation.goBack}>
				<Icon source={IMAGES.back} size={40}/>
			</TouchableOpacity>
			<View paddingV-30 paddingH-20 style={{ width: '100%', backgroundColor: '#ffffff', borderRadius: 24, alignItems: 'center' }} marginT-40>
				
				{ tier.discount > 0 && <QRCode value={jwt.encode(({ _id: user._id, iat: Math.round(new Date().getTime() / 1000)  }), 'scannus')} backgroundColor="transparent" size={200}/>}
				<Text style={{marginTop: tier.discount > 0 ? 20 : 0}} text30>{tier.name.toUpperCase()}</Text>
				<Text color="gray" text70 textAlign="center">{tier.discount}% off all partnering merchants.</Text>
			</View>
			<View marginT-10 paddingH-10>
				<Text color="gray" text90 marginT-20 textAlign="center">*Individual merchants may have varying restrictions for redemptions.</Text>
				<Text text50 marginT-40>Instructions</Text>
				<Text marginT-10 text70>1. Approach any of our partnering vendors</Text>
				<Text marginT-10 text70>2. Display the QR code above at the payment counter.</Text>
				<Text marginT-10 text70>3. If the QR code is expired, press the refresh button</Text>
				<Text marginT-10 text70>4. Enjoy your discount</Text>
			</View>
		</ScrollView>
	)
}

export default RewardQR