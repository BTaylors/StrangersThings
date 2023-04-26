import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { userLogin } from "../../api/helpers";
import "../../styles/Login.css";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { setToken, user } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const result = await userLogin(username, password);
			console.log("Result in component: ", result);
			setToken(result.data.token);
			localStorage.setItem("token", result.data.token);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="login">
			<form onSubmit={handleSubmit}>
				<div className="login-form">
					<h2 className="login-header">Login</h2>
					<br></br>
					<label name="username">Username:</label>
					<input
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<br></br>
					<br></br>
					<label password="password">Password:</label>
					<input
						type="text"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<br></br>
					<button>Submit</button>
				</div>
			</form>
		</div>
	);
}
