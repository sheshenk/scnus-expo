import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './components/navigation/Tabs'
import Token from './screens/Token'
import { readToken, saveToken } from './services/handleUserToken'

export default function App() {
	const Stack = createStackNavigator()
	readToken().then(x => console.log(x))

	

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="App">
				<Stack.Screen name='App' component={Tabs} options={{headerShown: false}}/>
				<Stack.Screen name='Token' component={Token} options={{headerShown: false}}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}