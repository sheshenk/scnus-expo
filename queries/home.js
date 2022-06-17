import { gql } from "@apollo/client";

export const HOME_QUERY = gql`
	query HomeQuery {
		currentUser {
			name
			... on Customer {
				tokens {
					name
					description
					imageURL
					link
				}
			}
		}
	}
`