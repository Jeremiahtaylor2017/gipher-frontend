import { useState, useEffect } from "react";
import { auth, onAuthStateChanged } from "./firebase";

import Main from "./components/Main";

import "./App.scss";

function App() {
	const [userState, setUserState] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => setUserState(user));
		return unsubscribe;
	}, []);

	return (
		<div className="App">
			<Main user={userState} setUserState={setUserState} />
		</div>
	);
}

export default App;
