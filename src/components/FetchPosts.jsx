import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../api/users";

export default function allPosts() {
	const navigate = useNavigate();
	const [post, setPosts] = useState([]);

	useEffect(() => {
		async function allPosts() {
			const postList = await getPosts();
			setPosts(postList);
		}
		allPosts();
	}, []);

	return (
		<>
			<h1>Posts</h1>
			{postMessage.map((post) => (
				<div key={post.id}>
					<h3>{post.title}</h3>
					<div>{post.body}</div>
				</div>
			))}
		</>
	);
}
