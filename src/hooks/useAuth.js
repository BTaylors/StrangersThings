const useAuth = () => {
	const [token, setToken] = useState(localStorage.getItem("token"));

	console.log("Token:", token);

	return { token, setToken };
};

export default useAuth;
