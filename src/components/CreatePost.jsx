import React, { useState } from "react";
import { newPost } from "../api/helpers";
import "../App.css";

export default function CreatePost() {
	const [item, setItem] = useState("");
	const [price, setPrice] = useState("");
	return (
		<div>
			<h2>List an item for sale!</h2>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					const newItem = await newPost(name, price);
					console.log("New Item: ", newItem);
				}}
			>
				<label htmlFor="name">Item:</label>
				<input type="text" onChange={(e) => setName(e.target.value)} />
				<br />
				<label htmlFor="breed">Price:</label>
				<input type="text" onChange={(e) => setBreed(e.target.value)} />
				<button>Submit</button>
			</form>
		</div>
	);
}
