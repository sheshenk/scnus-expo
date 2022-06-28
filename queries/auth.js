import { gql } from '@apollo/client'

export const CURRENT_USER = gql`
	query CurrentUser($token: String) {
		currentUser(token: $token) {
			_id
			name
			phone
			... on Customer {
				tokens {
					_id
					name
					description
					imageURL
					link
				}
			}
			... on Merchant {
				discount
				discountToday
			}
		}
	}
`

export const IS_EXISTING_USER = gql`
	query IsExistingUser($phone: ID!) {
		isExistingUser(phone: $phone)
	}
`

export const UPDATE_OTP = gql`
	mutation UpdateOTP($phone: ID!) {
		updateOTP(phone: $phone) {
			response
			error
		}
	}
`

export const LOGIN = gql`
	mutation Login($phone: ID!, $otp: String!) {
		login(phone: $phone, otp: $otp) {
			response
			error
		}
	}
`

export const CREATE_CUSTOMER = gql`
	mutation CreateCustomer($name: String!, $phone: String!) {
		createCustomer(name: $name, phone: $phone) {
			response
			error
		}
	}
`