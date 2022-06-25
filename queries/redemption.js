import { gql } from "@apollo/client";

export const CREATE_REDEMPTION = gql`
	mutation CreateRedemption($merchantId: String!, $amount: Float!, $discount: Float!, $customerId: String!) {
		createRedemption(merchantId: $merchantId, amount: $amount, discount: $discount, customerId: $customerId) {
			response
			error
		}
	}
`