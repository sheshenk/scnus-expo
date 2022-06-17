
import { Card, Image } from "react-native-ui-lib"

export default function RecentlyCollectedItem({item, onPress}) {
	
	return (
		<Card marginR-15 style={{ width: 180, height: 180, borderRadius: 10, overflow: 'hidden'}} activeOpacity={0.9} onPress={onPress}>
			<Image source={item.image} style={{width:'100%', height:'100%'}} resizeMode='contain'/>
		</Card>
	)
}