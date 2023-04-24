import React, { useState } from "react";
import { createPost } from "../api/helpers";
import "../App.css";

export default function newPost() {
	const [item, setItem] = useState("");
	const [price, setPrice] = useState("");

	return (
		<div>
			<h2 id="createH2">List an item for sale!</h2>
			<form
				id="createForm"
				onSubmit={async (e) => {
					e.preventDefault();
					const newItem = await createPost(item, price);
					console.log("New Item: ", newItem);
				}}
			>
				<div id="createText">
					<label htmlFor="item">Item:</label>
					<input type="text" onChange={(e) => setItem(e.target.value)} />
					<br />
					<label htmlFor="price">Price:</label>
					<input type="text" onChange={(e) => setPrice(e.target.value)} />
					<br />
					<label htmlFor="item">Location:</label>
					<input type="text" onChange={(e) => setItem(e.target.value)} />
					<br />
					<label htmlFor="item">Will Deliver?</label>
					<input type="checkbox" onChange={(e) => setItem(e.target.value)} />
					<br />
					<br />
					<button>Submit</button>
					<br />
				</div>
			</form>
		</div>
	);
}
