import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Profile from "./components/Profile";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Register from "./components/Register";
import SinglePost from "./components/SinglePost";
import Contact from "./components/Contact";

function App() {
	return (
		<div className="App">
			<Navbar />
			{/* <Register setToken={setToken} /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/singlepost" element={<SinglePost />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/create" element={<CreatePost />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
