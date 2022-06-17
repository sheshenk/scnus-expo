import { Image, Text, View } from "react-native-ui-lib"
import COLORS from "../../constants/colors"

export default function TabBarIcon({ focused, icon, name }) {
	const tintColor = focused ? COLORS.primary : COLORS.gray
	return (
		<View style={{ alignItems: 'center', justifyContent: 'center'}}>
			<Image source={icon} resizeMode='contain' style={{width: 30, height: 30, tintColor: name !== 'Scan' ? tintColor : 'white'}}/>
			{name !== 'Scan' && <Text style={{color: tintColor, fontSize: 12, marginTop:4}}>{name}</Text>}
		</View>
	)
}