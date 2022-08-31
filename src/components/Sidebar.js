import ProfileInfo from "./ProfileInfo";

import styled from "styled-components";

const StyledSidebar = styled.div`
	background-color: #f9f6ff;
	width: 300px;
	height: 100vh;
	position: sticky;

	div {
		ul {
			list-style: none;
			margin-top: 30px;

			li {
				color: #a8a8a8;
				line-height: 50px;

				div {
					height: 100%;
					padding-left: 30px;
					font-size: 18px;
				}
				div:hover {
					color: #5833c3;
					background-color: #eee8ff;
				}
			}
		}
	}
`;

const StyledTitle = styled.h1`
	color: #5833c3;
	padding-top: 20px;
	padding-left: 30px;
	margin-bottom: 30px;
	font-size: 20px;
`;

const Sidebar = (props) => {
	return (
		<StyledSidebar>
			<div>
				<StyledTitle>
					<h1>Gipher</h1>
				</StyledTitle>
				<ProfileInfo />
				<div>
					<ul>
						<li>
							<div>Home</div>
						</li>
						<li>
							<div>Notifications</div>
						</li>
						<li>
							<div>Messages</div>
						</li>
						<li>
							<div>Saved</div>
						</li>
						<li>
							<div>Settings</div>
						</li>
					</ul>
				</div>
			</div>
		</StyledSidebar>
	);
};

export default Sidebar;
