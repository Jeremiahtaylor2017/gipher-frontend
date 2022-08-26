import ProfileInfo from "../ProfileInfo/ProfileInfo";

import "./Sidebar.scss";

const Sidebar = (props) => {
	return (
		<div className="SidebarContainer">
			<h1>Gipher</h1>
			<ProfileInfo />
			<div className="links">
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
						<div>Saves</div>
					</li>
					<li>
						<div>Settings</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
