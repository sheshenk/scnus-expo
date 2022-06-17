import { ImageBackground } from "react-native"
import { Text, View } from "react-native-ui-lib"
import IMAGES from "../../constants/images"
import TOKENS from "../../constants/tokens"
import RecentlyCollectedGrid from "./RecentlyCollectedGrid"

export default function HomeHeader({user}) {
	return (
		<View style={{ width: '100%', height: 250 }}>
			<ImageBackground source={IMAGES.banner} resizeMode='cover' style={{ flex: 1, alignItems: 'center'}}>
				<View style={{marginTop: 70, width: '100%', alignItems: 'center', justifyContent: 'center'}}>
					<Text color='white' text70>Welcome</Text>
					<Text color='white' text30>{user.name}</Text>
				</View>
				<RecentlyCollectedGrid tokens={user.tokens.slice(0,3)}/>
			</ImageBackground>
		</View>
	)
}