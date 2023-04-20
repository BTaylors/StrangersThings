import { createContext } from "react";

export const AuthContext = createContext;

const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const contextValue = {
		token,
		setToken,
	};
	return (
		<AuthContext.provider value={contextValue}>{children}</AuthContext.provider>
	);
};

export default AuthProvider;
