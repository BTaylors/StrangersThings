// import React, { useState } from "react";
// import useAuth from "../../hooks/useAuth";
// import { postMessage } from "../api/helpers";

// export default function newMessage() {
// 	const { token } = useAuth();
// 	const messages = user.messages || [];
// 	const [post, setPost] = useState("");
// 	const [content, setContent] = useState("");
// 	const fromUser = useState("");
// 	const toUser = useState("");

// 	return (
// 		<div>
// 			<h2 id="createH2">New Message</h2>
// 			<form
// 				id="createMessage"
// 				onSubmit={async (e) => {
// 					e.preventDefault();
// 					const myMessage = await postMessage(
// 						user,
// 						messages,
// 						post,
// 						token,
// 						content,
// 						fromUser,
// 						toUser
// 					);
// 					console.log("My Message:", myMessage);
// 				}}
// 			>
// 				<div id="createText">
// 					<label htmlFor="toUser">To User:</label>
// 					<input type="text" onChange={(e) => setTitle(e.target.value)} />
// 					<br />
// 					<label htmlFor="content">Content:</label>
// 					<input type="text" onChange={(e) => setConent(e.target.value)} />
// 					<br />
// 					<label htmlFor="post">Post:</label>
// 					<input type="text" onChange={(e) => setPost(e.target.value)} />
// 					<br />
// 					<button>Send</button>
// 					<br />
// 				</div>
// 			</form>
// 		</div>
// 	);
// }
