import { useMutation } from "@apollo/client";
import { useContext, useState } from "react";
import { Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Icon, Incubator, Text, TouchableOpacity, View } from "react-native-ui-lib";
import IMAGES from "../constants/images";
import { UserContext } from "../services/userContext"
import { CREATE_REDEMPTION } from '../queries/redemption'

const TT_DETAIL_SIZE = 20

function Transaction({ route, navigation}) {
	const {user, setUser} = useContext(UserContext)
	const { customerId, discount } = route.params
	const [amount, setAmount] = useState('')

	const [createRedemption] = useMutation(CREATE_REDEMPTION, {
		variables: {
			merchantId: user._id,
			customerId: customerId,
			amount: parseFloat(amount),
			discount: ((1 - discount) * parseFloat(amount))
		},
		onCompleted: ({ createRedemption }) => {
			if (createRedemption.response) {
				alert('Redeemed')
			} else {
				alert('Error')
			}
		},
	})

	return (
		<View paddingT-70 paddingB-20 paddingH-30>
			<TouchableOpacity onPress={navigation.goBack}>
				<Icon source={IMAGES.back} size={40}/>
			</TouchableOpacity>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<Text marginT-20 text30>New Transaction</Text>
				<Incubator.TextField value={amount} onChangeText={setAmount} marginT-30 placeholder="Original Amount" keyboardType="numeric" style={{ fontSize: 20 }} fieldStyle={{ padding: 20, borderColor: '#bbb', borderWidth: 1, borderStyle: 'solid', borderRadius: 12, minWidth: '100%'}}/>
				<View marginT-40 style={{ height: TT_DETAIL_SIZE * 1.5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
					<Text text70 style={{ fontSize: TT_DETAIL_SIZE, fontWeight: 'bold'}}>Original Price</Text>
					<Text text70 style={{ fontSize: TT_DETAIL_SIZE}}>S${amount === '' ? '0.00' : parseFloat(amount).toFixed(2)}</Text>
				</View>
				<View marginT-10 style={{ height: TT_DETAIL_SIZE * 1.5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
					<Text text70 style={{ fontSize: TT_DETAIL_SIZE, fontWeight: 'bold'}}>Discount %</Text>
					<Text text70 style={{ fontSize: TT_DETAIL_SIZE}}>{discount * 100}%</Text>
				</View>
				<View marginT-30 style={{ height: TT_DETAIL_SIZE * 1.5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
					<Text text70 style={{ fontSize: TT_DETAIL_SIZE, fontWeight: 'bold'}}>Final Price</Text>
					<Text text70 style={{ fontSize: TT_DETAIL_SIZE}}>S${amount === '' ? '0.00' : ((1 - discount) * parseFloat(amount)).toFixed(2)}</Text>
				</View>
			</TouchableWithoutFeedback>
			<TouchableOpacity onPress={() => createRedemption()} style={{ width: '100%', backgroundColor: '#f39c12', alignItems: 'center', justifyContent: 'center', borderRadius: 12}} padding-20 marginT-40 activeOpacity={0.7}>
				<Text color="white" style={{ fontSize: 20}}>Log Transaction</Text>
			</TouchableOpacity>
				
		</View>
		
	)
}

export default Transaction;