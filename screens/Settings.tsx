import { useContext } from "react"
import { Text, TouchableOpacity, View } from "react-native-ui-lib"
import { deleteToken } from "../services/handleUserToken"
import { UserContext } from "../services/userContext"


export default function Settings({ navigation }) {

	const {user, setUser} = useContext(UserContext)

	const logout = () => {
		deleteToken().then(() => {
			navigation.navigate('Auth')
			setUser(null)
		})
	}

	return (
		<View>
			<View paddingT-60 paddingB-20 paddingH-20 backgroundColor='grey'>
				<Text color='white' text30>Settings</Text>
			</View>
			<View paddingV-30 paddingH-20>
				<TouchableOpacity onPress={logout} activeOpacity={0.7} backgroundColor="#e74c3c" style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 12 }} padding-20>
					<Text text70 color="white">Log Out</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}