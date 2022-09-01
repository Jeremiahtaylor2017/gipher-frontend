import { useEffect, useRef } from "react";

import { login } from "../firebase";

import styled from "styled-components";

import googleButton from "../assets/btn_google_signin_light_normal_web@2x.png";

const StyledSplashPage = styled.div`
	div {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100vh;
		background-color: #f9f6ff;
		color: #5833c3;

		img {
			max-width: 65vh;
			height: 100%;
		}

		div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;

			h1 {
				font-size: 4em;
			}

			h3 {
				font-size: 1.5em;
			}
			img {
				height: 92px;
				width: 382px;
				cursor: pointer;
				margin-top: 2rem;
			}
		}
	}
`;

const Splash = ({ user, setProfile, getOrCreateProfile }) => {
	const getOrCreateProfileRef = useRef(null);

	useEffect(() => {
		getOrCreateProfileRef.current = getOrCreateProfile;
	});

	useEffect(() => {
		if (user) {
			getOrCreateProfileRef.current(user);
		} else {
			setProfile(null);
		}
	}, [user]);

	return (
		<StyledSplashPage>
			<div>
				<img
					src="https://images.unsplash.com/photo-1558536219-c7b71c4980ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=808&q=80"
					alt="Media is Everything"
				/>
				<div>
					<h1>Express Freely</h1>
					<h3>Join Gipher today.</h3>
					<img onClick={login} src={googleButton} alt="Sign in with google" />
				</div>
			</div>
		</StyledSplashPage>
	);
};

export default Splash;
