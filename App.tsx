import { ApolloProvider } from '@apollo/client'
import apolloClient from './services/apolloClientProvider'
import AppNavigationContainer from './components/navigation/AppNavigationContainer'
import UserContextProvider from './services/userContext'

export default function App() {
	return (
		<ApolloProvider client={apolloClient}>
			<UserContextProvider>
				<AppNavigationContainer/>
			</UserContextProvider>
		</ApolloProvider>
	)
}