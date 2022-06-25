import { gql } from "@apollo/client";

export const CURRENT_TOKENS = gql`
	query CurrentTokens {
		readTokens {
			_id
			name
			description
			imageURL
			link
		}
	}
`

export const ADD_TOKEN_TO_CURR_USER = gql`
	mutation AddTokenToCurrentUser($_id: ID!) {
		addTokenToCurrentUser(_id: $_id) {
			response
			error
		}
	}
`