import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveToken = async (token) => {
	try {
		await AsyncStorage.setItem('scnus-token', token)
	} catch (err) { console.log(err) }
}

export const readToken = async () =>{
	try {
		const value = await AsyncStorage.getItem('scnus-token')
		return value === null ? 'null' : value
	} catch (err) { console.log(err) }
}

export const deleteToken = async () => {
	await saveToken('null')
}