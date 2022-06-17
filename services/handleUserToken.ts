import * as SecureStore from 'expo-secure-store';

export const saveToken = (token) => SecureStore.setItemAsync("scnus-token", token)
// export const readToken = () => SecureStore.getItemAsync("scnus-token")
export const readToken = async () => "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFjMTA3ZGRjNDU4OWEyZGViNDRkM2MiLCJwaG9uZSI6Ijg1MjEzMDg1IiwiX19yZXNvbHZlVHlwZSI6IkN1c3RvbWVyIiwiaWF0IjoxNjU1NDQzODA0fQ.0VrdmC9DNyQAlttuWivL_sNRISzfAJjXJxeT2GTIc9M"
export const deleteToken = () => SecureStore.setItemAsync("scnus-token", null)