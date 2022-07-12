import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { readToken, saveToken } from './handleUserToken'
import Constants from 'expo-constants'

// const uri = `http://${Constants.manifest.debuggerHost.split(':').shift()}:4000`;
const uri = 'https://scnus-server.herokuapp.com'
// const authLink = setContext((_, { headers }) => {
// 	return readToken().then(token => (
// 		{
// 			headers: {
// 				...headers,
// 				authorization: `Bearer ${token}`
// 			}
// 		}
// 	))
// })

const authLink = setContext(request => new Promise((resolve, reject) => {
	readToken().then(token => resolve({ headers: { authorization: `Bearer ${token}`}}))
}))

const httpLink = new HttpLink({
	// uri: "http://localhost:4000/"
	uri: uri
})

const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
})

export default apolloClient