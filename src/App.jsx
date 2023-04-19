import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import RegisterForm from "./components/Register";

function App() {
	const [token, setToken] = useState(localStorage.getItem("token"));
	return (
		<div className="App">
			<h1>Stranger's Things!</h1>
			<RegisterForm setToken={setToken} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/singlepost" element={<SinglePost />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/create" element={<CreatePost />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
