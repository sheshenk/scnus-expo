import { useLazyQuery, useMutation } from "@apollo/client"
import { useContext, useState } from "react"
import { ImageBackground, Keyboard, TouchableWithoutFeedback } from "react-native"
import { Image, Incubator, Text, TouchableOpacity } from "react-native-ui-lib"
import IMAGES from "../constants/images"
import { CREATE_CUSTOMER, CURRENT_USER, IS_EXISTING_USER, LOGIN, UPDATE_OTP } from "../queries/auth"
import { readToken, saveToken } from "../services/handleUserToken"
import { UserContext } from "../services/userContext"


function Auth({ navigation }) {
	
	const {user, setUser} = useContext(UserContext)
	const [phone, setPhone] = useState('')
	const [name, setName] = useState('')
	const [otp, setOtp] = useState('')
	const [stage, setStage] = useState(1)

	const [updateOTP] = useMutation(UPDATE_OTP, {
		variables: { phone: phone },
		onCompleted: ({ updateOTP }) => {
			if (updateOTP.response) {
				alert(updateOTP.response)
			}
		}
	})

	const [getCurrentUser] = useLazyQuery(CURRENT_USER, {
		onCompleted: ({ currentUser }) => {
			setUser(currentUser)
			if (currentUser.__typename === 'Merchant') {
				navigation.navigate('MerchantApp')
			} else {
				navigation.navigate('App', { screen: 'Home'})
			}
			
		}
	})

	const [isExistingUser, {data}] = useLazyQuery(IS_EXISTING_USER, {
		onCompleted: ({ isExistingUser }) => {
			if (isExistingUser) {
				updateOTP()
				setStage(3)
			} else {
				setStage(2)
			}
		}
	})

	const [createCustomer] = useMutation(CREATE_CUSTOMER, {
		variables: { name: name, phone: phone},
		onCompleted: ({createCustomer}) => {
			if (createCustomer.response) {
				updateOTP()
				setStage(3)
			}
		}
	})

	const [login] = useMutation(LOGIN, {
		variables: { phone: phone, otp: otp },
		onCompleted: ({login}) => {
			if (login.response) {
				saveToken(login.response).then(() => readToken().then(res => {
					getCurrentUser({ variables: { token: res }})
				}))
			} else {
				alert('Invalid OTP!')
			}
		}
	})

	const handlePhoneSubmit = () => {
		isExistingUser({ variables: { phone: phone}})
	}

	const handleNameSubmit = () => {
		createCustomer()
	}

	const handleLogin = () => {
		login()
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<ImageBackground source={IMAGES.loginBackground} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 40}}>
				<Image source={IMAGES.logo} height={150} width={150}/>
				{
					stage === 1 && <>
						<Incubator.TextField value={phone} onChangeText={setPhone} marginT-40 placeholder="Phone Number" keyboardType="numeric" style={{ fontSize: 20 }} fieldStyle={{ padding: 20, borderColor: '#bbb', borderWidth: 1, borderStyle: 'solid', borderRadius: 12, minWidth: '100%'}}/>
						<TouchableOpacity onPress={handlePhoneSubmit} style={{ width: '100%', backgroundColor: '#f39c12', alignItems: 'center', justifyContent: 'center', borderRadius: 12}} padding-20 marginT-20 activeOpacity={0.7}>
							<Text color="white" style={{ fontSize: 20}}>Continue</Text>
						</TouchableOpacity>
					</>
				}
				{
					stage === 2 && <>
						<Text text60 marginT-40>Create New Account</Text>
						<Incubator.TextField value={name} onChangeText={setName} marginT-30 placeholder="Your Name" style={{ fontSize: 20 }} fieldStyle={{ padding: 20, borderColor: '#bbb', borderWidth: 1, borderStyle: 'solid', borderRadius: 12, minWidth: '100%'}}/>
						<TouchableOpacity onPress={handleNameSubmit} style={{ width: '100%', backgroundColor: '#f39c12', alignItems: 'center', justifyContent: 'center', borderRadius: 12}} padding-20 marginT-20 activeOpacity={0.7}>
							<Text color="white" style={{ fontSize: 20}}>Continue</Text>
						</TouchableOpacity>
					</>
				}
				{
					stage === 3 && <>
						<Incubator.TextField value={otp} onChangeText={setOtp} marginT-40 placeholder="OTP" keyboardType="numeric" style={{ fontSize: 20 }} fieldStyle={{ padding: 20, borderColor: '#bbb', borderWidth: 1, borderStyle: 'solid', borderRadius: 12, minWidth: '100%'}}/>
						<TouchableOpacity onPress={handleLogin} style={{ width: '100%', backgroundColor: '#f39c12', alignItems: 'center', justifyContent: 'center', borderRadius: 12}} padding-20 marginT-20 activeOpacity={0.7}>
							<Text color="white" style={{ fontSize: 20}}>Log In</Text>
						</TouchableOpacity>
					</>
				}
				<Image source={IMAGES.nusflLogo} marginT-100/>
			</ImageBackground>
		</TouchableWithoutFeedback>
	)
}

export default Auth