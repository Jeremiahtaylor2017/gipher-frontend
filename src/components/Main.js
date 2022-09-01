import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import PrivateRoutes from "../utils/PrivateRoutes";

import Splash from "../pages/Splash";
import Home from "../pages/Home";

// function PrivateRoute({ children, user }) {
// 	if (user) {
// 		return children;
// 	} else {
// 		return <Navigate to="/" />;
// 	}
// }

const Main = ({ user, setUserState }) => {
	const [profile, setProfile] = useState(null);

	// const getOrCreateProfileRef = useRef(null);

	const getOrCreateProfile = async (profile) => {
		const API_URL = "http://localhost:3001/api/user";
		try {
			const token = await user.getIdToken();
			// response = fetch
			// check response and add info to state after db lookup
			const response = await fetch(API_URL, {
				method: "post",
				headers: {
					"Content-type": "Application/json",
					"Authorization": "Bearer " + token
				},
				body: JSON.stringify(profile)
			});
			const data = await response.json();
			setProfile(data);
			console.log(response);
			console.log(data);
			console.log(profile);
		} catch (error) {
			console.log(error);
			// TODO: add logic or task if something goes wrong.
		}
	};

	// useEffect(() => {
	// 	if (profile) {
	// 		console.log(profile);
	// 		setUserState(profile);
	// 	}
	// }, [profile]);

	console.log(user);
	return (
		<main>
			<Routes>
				<Route
					exact
					path="/"
					element={
						<Splash
							user={user}
							setProfile={setProfile}
							getOrCreateProfile={getOrCreateProfile}
						/>
					}
				/>
				<Route element={<PrivateRoutes user={user} />}>
					<Route path="/home" element={<Home profile={profile} />} />
				</Route>
			</Routes>
		</main>
	);
};

export default Main;
