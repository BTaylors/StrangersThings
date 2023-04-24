import React, { useState } from "react";
import "../../App.css";
const COHORT_NAME = "2301-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
import useAuth from "../../hooks/useAuth";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { setToken, user } = useAuth();
	async function loginSubmit(e) {
		e.preventDefault();
		try {
			const response = await fetch(`${BASE_URL}/users/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					user: {
						username,
						password,
					},
				}),
			});
			const result = await response.json();
			console.log(result);
			setToken(result.data.token);
			localStorage.setItem("token", result.data.token);
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<div className="login">
			<form id="login-form" onSubmit={loginSubmit}>
				<h1 className="login-header">Login</h1>
				<br></br>
				<label name="username">Username:</label>
				<br></br>
				<input
					type="text"
					placeholder="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<br></br>
				<label password="password">Password:</label>
				<br></br>
				<input
					type="text"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button id="submitLogin">Submit</button>
			</form>
		</div>
	);
}
