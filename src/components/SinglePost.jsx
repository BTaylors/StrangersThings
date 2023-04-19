import React, { useEffect, useState } from "react";
import { deleteItem, fetchSinglePost } from "../api/helpers.js";
import { useParams } from "react-router-dom";
import "../App.css";

export default function SinglePost() {
	const { postID } = useParams();
	const [post, setPost] = useState(null);

	useEffect(() => {
		async function getPost() {
			const postFromAPI = await fetchSinglePost(postID);
			console.log(postFromAPI);
			setPost(postFromAPI);
		}
		getPost();
	}, []);
	return (
		<div>
			{post && (
				<ul>
					{/* check the syntax on your objects! is the item still available?  */}
					<li>Item: {post.id}</li>
					<li>Price: {post.price}</li>
					<li>Status: {post.status}</li>
					<li>{/* <img src={} /> */}</li>
				</ul>
			)}
			<button
				id="removeButton"
				onClick={() => deleteItem(post.id)}
				type="submit"
			>
				Delete Item!
			</button>
		</div>
	);
}
