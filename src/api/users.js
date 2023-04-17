import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import "./index.css";

const COHORT_NAME = "2301-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export async function registerUser(username, password) {
	try {
		const response = await fetch(`${BASE_URL}/users/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user: {
					username,
					password,
				},
			}),
		});
		const result = await response.json();
		console.log();
		return result;
	} catch (error) {
		console.error(error);
	}
}

useEffect(() => {
    const getPosts = async ( ) => {
        const response = await fetch(`${BASE_URL}/posts`), 
            const data = await response.json();
            getPosts(data);
    }
getPosts();
}, [])

return <>
<h1>Posts</h1>
{postMessage.map(post => <div key={post.id}>
    <h3>{post.title}</h3>
    <div>{post.body}</div>
    </div>)}
    </>
    