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
					const newItem = await newPost(item, price);
					console.log("New Item: ", newItem);
				}}
			>
				<label htmlFor="item">Item:</label>
				<input type="text" onChange={(e) => setItem(e.target.value)} />
				<br />
				<label htmlFor="price">Price:</label>
				<input type="text" onChange={(e) => setPrice(e.target.value)} />
				<button>Submit</button>
			</form>
		</div>
	);
}
