import { gql } from "@apollo/client";

export const VERIFY_REWARD = gql`
	mutation VerifyReward($token: String!) {
		verifyReward(token: $token) {
			response
			error
		}
	}
`