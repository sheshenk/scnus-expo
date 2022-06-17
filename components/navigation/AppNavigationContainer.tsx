import { useQuery } from "@apollo/client"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { useEffect, useState } from "react"
import { Text } from "react-native-ui-lib"
import Token from "../../screens/Token"
import Tabs from "./Tabs"
import { CURRENT_USER } from '../../queries/auth'

export default function AppNavigationContainer() {
	const Stack = createStackNavigator()
	const [user, setUser] = useState(undefined)
	const { loading, data } = useQuery(CURRENT_USER)

	useEffect(() => {
		if (data && data.currentUser) setUser(data.currentUser)
	}, [loading, data])

	if (user === undefined) return <></>
	if (user === null) return <Text>Login</Text>

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="App">
				<Stack.Screen name='App' component={Tabs} options={{headerShown: false}}/>
				<Stack.Screen name='Token' component={Token} options={{headerShown: false}}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}