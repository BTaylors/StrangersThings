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
		console.log("Result from register user: ", result);
		return result;
	} catch (error) {
		console.error(error);
	}
}

export async function fetchMe(token) {
	try {
		const response = await fetch(`${BASE_URL}/users/me`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
		const result = await response.json();
		console.log("Result in fetchMe: ", result);
		return result;
	} catch (error) {
		console.error(error);
	}
}

export const getPosts = async () => {
	try {
		const response = await fetch(`${BASE_URL}/posts`);
		const result = await response.json();
		console.log(result);
		return result.data.posts;
	} catch (error) {
		console.error("ERROR");
	}
};

export const fetchSinglePost = async (id) => {
	try {
		const response = await fetch(`${BASE_URL}/posts/${id}`);
		const result = await response.json();
		console.log("result", result);
		return result.data.post;
	} catch (error) {
		console.error("Oops, I couldn't fetch that post!");
	}
};

export const createPost = async (
	user,
	title,
	price,
	description,
	location,
	willDeliver,
	token
) => {
	try {
		const response = await fetch(`${BASE_URL}/posts`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				post: {
					user,
					title,
					price,
					description,
					location,
					willDeliver,
				},
			}),
		});
		const result = await response.json();
		console.log(result);
		return result;
	} catch (err) {
		console.error(err);
	}
};

export const deletePost = async (token, id) => {
	try {
		const response = await fetch(`${BASE_URL}/posts/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
		const result = await response.json();
		console.log("Result from Delete", result);
		return result;
	} catch (error) {
		console.error(error);
	}
};

export async function GetMyPosts(token) {
	try {
		const response = await fetch(`${BASE_URL}/posts/${token}`);
		const result = await response.json();
		console.log("result", result);
		return result.data.post;
	} catch (error) {
		console.error(error);
	}
}

export const getToken = async (token) => {
	try {
		const response = await fetch(`${BASE_URL}/users/me`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error);
	}
};

export const userLogin = async (username, password) => {
	try {
		const response = await fetch(`${BASE_URL}/users/login`, {
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
		console.log(result);
		return result;
	} catch (error) {
		console.error(error);
	}
};
export const userLogout = async (token) => {
	try {
		const response = await fetch(`${BASE_URL}/Login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user: {
					token,
				},
			}),
		});
		const result = await response.json();
		console.log(result);
		return result;
	} catch (err) {
		console.error(err);
	}
};
// export const postMessage = async () => {
// 	try {
// 		const response = await fetch(`${BASE_URL}/posts/${id}/messages`, {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 				Authorization: `Bearer ${token}`,
// 			},
// 			body: JSON.stringify({
// 				message: {
// 					content: "",
// 				},
// 			}),
// 		});
// 		const result = await response.json();
// 		console.log(result);
// 		return result;
// 	} catch (err) {
// 		console.error(err);
// 	}
// };
