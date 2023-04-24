import "./App.css";
import { useState, React } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Profile from "./components/Profile";
import CreatePost from "./components/CreatePost";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import SinglePost from "./components/SinglePost";
import Contact from "./components/Contact";
import useAuth from "./hooks/useAuth";

function App() {
	const { token, user } = useAuth();
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Profile" element={<Profile />} />
				<Route path="/CreatePost" element={<CreatePost />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Register" element={<Register />} />
				<Route path="/:id" element={<SinglePost />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
