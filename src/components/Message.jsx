import React from "react";
import { postMessage } from "../api/helpers";
import { useLocation, useNavigate } from "react-router";
import "../App.css";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

export default function Message() {
	const location = useLocation();
	const [content, setContent] = useState();
	const nav = useNavigate();
	const { token } = useAuth();
	const post = location.state;
	const message = location.state;
	console.log("message", message);
	console.log("post", post);
	return (
		<div className="message-container">
			<div className="message-box">
				<h2 className="message-header">Send a Message!</h2>
				<br></br>
				<input
					type="text"
					htmlFor="message"
					content={content}
					placeholder="Message Text Here"
					className="message-input"
					onChange={(e) => setContent(e.target.value)}
				></input>
				<button
					className="message-button"
					onClick={async (e) => {
						await postMessage(token, post._id, content);
						nav("/");
					}}
				>
					Message
				</button>
			</div>
		</div>
	);
}
