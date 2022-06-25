import { useContext } from "react"
import { ImageBackground } from "react-native"
import { Text, View } from "react-native-ui-lib"
import IMAGES from "../../constants/images"
import { UserContext } from "../../services/userContext"
import RecentlyCollectedGrid from "./RecentlyCollectedGrid"

export default function HomeHeader() {
	const {user, setUser} = useContext(UserContext)
	const tokens = user ? user.tokens? user.tokens : [] : []
	return (
		<View style={{ width: '100%', height: tokens.length > 0 ? 250 : 190 }}>
			<ImageBackground source={IMAGES.banner} resizeMode='cover' style={{ flex: 1, alignItems: 'center'}}>
				<View marginT-70 style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
					<Text color='white' text70>Welcome</Text>
					<Text color='white' text30>{user ? user.name : ''}</Text>
				</View>
				{user && user.__typename === 'Customer' && tokens.length > 0 && <RecentlyCollectedGrid tokens={tokens.slice(0, 3)}/>}
			</ImageBackground>
		</View>
	)
}