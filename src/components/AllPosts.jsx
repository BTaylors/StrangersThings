import React from "react";
import { useEffect, useState } from "react";
import { getPosts } from "../api/helpers";
import "../App.css";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

export default function AllPosts() {
	const nav = useNavigate();
	const [posts, setPosts] = useState([]);
	const { id, user } = useAuth();
	const willDeliver = true;
	useEffect(() => {
		async function getAllPosts() {
			try {
				const allPosts = await getPosts();
				setPosts(allPosts);
			} catch (error) {
				console.error("Oops");
			}
		}
		getAllPosts();
	}, []);

	return (
		<div className="allposts">
			{posts.map((post) => {
				return (
					<div className="one-post" key={post._id}>
						<h1 className="post-title">{post.title}</h1>
						<ul className="post-info">
							<li>
								<p className="post-body">{post.description}</p>
							</li>
							<li>
								<p className="author">User: {post.author.username}</p>
								{post.willDeliver ? (
									<p className="delivery">Will Deliver!</p>
								) : (
									<p></p>
								)}
							</li>
						</ul>
						<button
							className="details-button"
							onClick={() => {
								posts.filter((post) => post._id);
								nav("/id", { state: post });
							}}
						>
							Details
						</button>
						{post.author.username === user.username && (
							<button className="delete-button">Delete</button>
						)}
					</div>
				);
			})}
			;
		</div>
	);
}
