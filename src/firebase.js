// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	onAuthStateChanged
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC5vodQlTOCRb7gq8YfA44q-Ym1dKe3EvA",
	authDomain: "gipher-30449.firebaseapp.com",
	projectId: "gipher-30449",
	storageBucket: "gipher-30449.appspot.com",
	messagingSenderId: "151856102293",
	appId: "1:151856102293:web:6372a49e8d2168fbefd49c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// initialist our provider
const provider = new GoogleAuthProvider();

// initialize a reference to our auth object
const auth = getAuth();

function login() {
	return signInWithPopup(auth, provider);
}

function logout() {
	return signOut(auth);
}

export { auth, login, logout, onAuthStateChanged };
