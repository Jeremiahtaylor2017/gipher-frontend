import "./ProfileInfo.scss";

const ProfileInfo = (props) => {
	return (
		<div className="ProfileInfoContainer">
			<img src="https://i.imgur.com/WmRUduL.jpeg" alt="Jeremiah Taylor" />
			<div className="userContainer">
				<p className="name">Jeremiah Taylor</p>
				<p className="handle">@jeremiahtaylor</p>
			</div>
		</div>
	);
};

export default ProfileInfo;
