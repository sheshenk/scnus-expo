import { ApolloProvider } from '@apollo/client'
import apolloClient from './services/apolloClientProvider'
import AppNavigationContainer from './components/navigation/AppNavigationContainer'

export default function App() {
	return (
		<ApolloProvider client={apolloClient}>
			<AppNavigationContainer/>
		</ApolloProvider>
	)
}