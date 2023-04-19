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

export const makePost = async () => {
	try {
		const response = await fetch(`${BASE_URL}/posts`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${TOKEN_STRING_HERE}`,
			},
			body: JSON.stringify({
				post: {},
			}),
		});
		const result = await response.json();
		console.log(result);
		return result;
	} catch (err) {
		console.error(err);
	}
};
