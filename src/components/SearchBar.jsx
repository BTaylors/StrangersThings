import React, { useState } from "react";
import "../App.css";

const searchBar = () => {
	const [searchInput, setSearchInput] = useState("");
	const posts = useState("");
	const user = useState("");

	const handleChange = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
	};

	if (searchInput.length > 0) {
		posts.filter((post) => {
			return post.title.match(searchInput);
		});
	}

	return (
		<div id="searchbar">
			<input
				type="search"
				placeholder="Search here"
				onChange={handleChange}
				value={searchInput}
			/>
			<table>
				{posts.map((post) => {
					<div>
						<tr>
							<td>{post.username}</td>
							<td>{post.title}</td>
						</tr>
					</div>;
				})}
			</table>
			<button>Submit</button>
		</div>
	);
};

export default searchBar;
