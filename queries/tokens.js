import { gql } from "@apollo/client";

export const CURRENT_TOKENS = gql`
	query CurrentTokens {
		readTokens {
			name
			description
			imageURL
			_id
			link
		}
		currentUser {
			... on Customer {
				tokens {
					_id
				}
			}
		}
	}
`