import { useState, useContext } from "react";
import { AuthContext } from "../components/AuthProvider";

const useAuth = () => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	return useContext;
};

export default useAuth;
