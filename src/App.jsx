import { useState, ReactDOM } from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm";

function App() {
	const [token, setToken] = useState(localStorage.getItem("token"));
	return (
		<div className="App">
			<h1>Stranger's Things!</h1>
			<RegisterForm setToken={setToken} />
			<Routes></Routes>
		</div>
	);
}

export default App;
