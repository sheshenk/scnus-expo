import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { useContext, useEffect } from "react"
import Token from "../../screens/Token"
import Tabs from "./Tabs"
import Auth from "../../screens/Auth"
import { UserContext } from "../../services/userContext"
import { useLazyQuery, useQuery } from "@apollo/client"
import { CURRENT_USER } from "../../queries/auth"
import { Text } from "react-native-ui-lib"
import MerchantTabs from "./MerchantTabs"
import Transaction from "../../screens/Transaction"

export default function AppNavigationContainer() {
	const Stack = createStackNavigator()
	const {user, setUser} = useContext(UserContext)

	const { data } = useQuery(CURRENT_USER)

	useEffect(() => {
		if (data) setUser(data.currentUser)
	}, [data])

	if (user === undefined) return <></>

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={user ? user.__typename === 'Merchant' ? 'MerchantApp' : 'App' : 'Auth'}>
				<Stack.Screen name='Auth' options={{headerShown: false, animationEnabled: false, }}>
					{(props) => <Auth {...props}/>}
				</Stack.Screen>
				{
					user && user.__typename === 'Customer' &&
						<Stack.Screen name='App' options={{headerShown: false}}>
							{(props) => <Tabs {...props}/>}
						</Stack.Screen>
				}
				{ user && user.__typename === 'Customer' &&
					<Stack.Screen name='Token' options={{headerShown: false}}>
						{(props) => <Token {...props}/>}
					</Stack.Screen>
				}
				{
					user && user.__typename === 'Merchant' &&
						<Stack.Screen name='MerchantApp' options={{headerShown: false}}>
							{(props) => <MerchantTabs {...props}/>}
						</Stack.Screen>
				}
				{
					user && user.__typename === 'Merchant' &&
						<Stack.Screen name='Transaction' options={{headerShown: false}}>
							{(props) => <Transaction {...props}/>}
						</Stack.Screen>
				}
			</Stack.Navigator>
		</NavigationContainer>
	)
}