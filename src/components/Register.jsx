import React, { useState } from "react";
// import { registerUser } from "../api/helpers";
// import useAuth from "../hooks/useAuth";

export default function Register() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { setToken, user } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const result = await Register(username, password);
			console.log("Result in component: ", result);
			setToken(result.data.token);
			localStorage.setItem("token", result.data.token);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="username"
					placeholder="username"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="text"
					name="password"
					placeholder="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
			</form>
		</div>
	);
}
