import { ApolloProvider, useQuery } from "@apollo/client";
import { createContext, useEffect, useMemo, useState } from "react";
import { CURRENT_USER } from "../queries/auth";
import apolloClient from "./apolloClientProvider";

export const UserContext = createContext({ user: undefined, setUser: (user) => {}})

const UserContextProvider = (props) => {
	const [user, setUser] = useState(undefined)

	const value = useMemo(
		() => ({ user, setUser }),
		[user]
	)

	return (
		<UserContext.Provider value={value}>
			{props.children}
		</UserContext.Provider>
	)
}

export default UserContextProvider