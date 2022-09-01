import { logout } from "../firebase";

import Sidebar from "../components/Sidebar";

const Home = ({ profile }) => {
	return (
		<>
			<Sidebar />
			<button onClick={logout}>Logout</button>
		</>
	);
};

export default Home;
