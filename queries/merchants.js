import { gql } from "@apollo/client";

export const GET_MERCHANTS_LIST = gql`
	query ReadMerchants {
		readMerchants {
			name
			location
			terms
		}
	}
`