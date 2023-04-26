import React, { useState } from "react";
import { createPost } from "../api/helpers";
import useAuth from "../hooks/useAuth";
import "../App.css";

export default function newPost() {
	const { user } = useAuth() || [];
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [location, setLocation] = useState("");
	const [willDeliver, setwillDeliver] = useState("");
	const { token } = useAuth();

	return (
		<div>
			<h2 id="createH2">List an item for sale!</h2>
			<form
				id="createForm"
				onSubmit={async (e) => {
					e.preventDefault();
					const newItem = await createPost(
						user,
						title,
						price,
						description,
						location,
						willDeliver,
						token
					);
					console.log("New Item: ", newItem);
				}}
			>
				<div id="createText">
					<label htmlFor="item">Item:</label>
					<input type="text" onChange={(e) => setTitle(e.target.value)} />
					<br />
					<label htmlFor="price">Price:</label>
					<input type="text" onChange={(e) => setPrice(e.target.value)} />
					<br />
					<label htmlFor="price">Description:</label>
					<input type="text" onChange={(e) => setDescription(e.target.value)} />
					<br />
					<label htmlFor="item">Location:</label>
					<input type="text" onChange={(e) => setLocation(e.target.value)} />
					<br />
					<label htmlFor="item">Will Deliver?</label>
					<input
						type="checkbox"
						onChange={(e) => setwillDeliver(e.target.value === "on")}
					/>
					<br />
					<br />
					<button>Submit</button>
					<br />
				</div>
			</form>
		</div>
	);
}
