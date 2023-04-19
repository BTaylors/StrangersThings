import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import RegisterForm from "./components/Register";

function App() {
	const [token, setToken] = useState(localStorage.getItem("token"));
	return (
		<div className="App">
			<h1>Stranger's Things!</h1>
			<RegisterForm setToken={setToken} />
			{/* <Routes><Route path="/" element={<getPosts />} /></Routes> */}
		</div>
	);
}

export default App;
