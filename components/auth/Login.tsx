import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase/clientApp";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import useUserState from "../../store/auth/user";
import Spinner from "../utils/spinner";
import Link from "next/link";

interface User {
	username: string;
	email: string;
	moodsDates: {};
	isPremium: boolean;
}

function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);
	const stateUser = useUserState((state) => state.user);
	const stateSetUser = useUserState((state) => state.setUser);
	const [customErr, setCustomErr] = useState("");

	function handleLoginButton() {
		setCustomErr("");
		if (!email) {
			setCustomErr("Please enter a valid email address.");
			return;
		}
		if (!password || password.length < 8) {
			setCustomErr("Passwords must be at least 8 characters long.");
			return;
		}
		if (!stateUser) {
			signInWithEmailAndPassword(email, password);
			return;
		}

		setCustomErr(`you're already logged in`);
	}

	useEffect(() => {
		if (!user) return;
		createNewUserProfile();
		async function createNewUserProfile() {
			const { uid, email } = user.user;
			console.log(uid, email);
			if (!uid || !email) return;
			try {
				// const newUser: User = {
				// 	username: null,
				// 	email: email.trim(),
				// 	moodsDates: {},
				// 	isPremium: false,
				// };

				const re = doc(db, "users", uid);
				const docSnap = await getDoc(re);
				const d = docSnap.data();
				console.log(d);
				// stateSetUser(newUser);
			} catch (e) {
				console.error("Error adding document: ", e, e.message);
			}
		}
	}, [user]);
	return (
		<div className="max-w-[500px] m-auto">
			<h3 className="text-4xl font-bold my-10">Login</h3>
			<div className="my-2">
				<div className="flex items-center justify-center gap-3 border-1 rounded-md my-2 py-2 cursor-pointer font-bold hover:(bg-woodsmoke-700/30 shadow-woodsmoke-900 shadoow ) ">
					<FcGoogle className="h-5 w-5" />
					<div>Continue With Google</div>
				</div>
				<div className="flex items-center justify-center gap-3 border-1 rounded-md my-2 py-2 cursor-pointer font-bold hover:(bg-woodsmoke-700/30 shadow-woodsmoke-900 shadoow ) ">
					<GrApple className="h-5 w-5" />
					<div>Continue With Apple</div>
				</div>
			</div>
			<form>
				<div className="my-2">
					<label
						htmlFor="email"
						className="inline-block py-1 font-bold text-sm font-mono"
					>
						email
					</label>
					<input
						className="block py-2 px-3 border-1 border-dark-300 text-dark-900 font-[inherit] rounded-md w-full"
						placeholder="Enter your email"
						id="email"
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="my-2">
					<label
						htmlFor="password"
						className="inline-block py-1 font-bold text-sm font-mono"
					>
						password
					</label>
					<input
						className="block py-2 px-3 border-1 border-dark-300 text-dark-900 font-[inherit] rounded-md w-full"
						placeholder="Enter your password"
						id="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="text-red-500 py-1 font-bold">
					{error && <span>{error.code}</span>}
					{customErr && <span>{customErr}</span>}
				</div>
				<button
					className="flex items-center justify-center gap-3 my-2 py-2 text-yellow-700  bg-yellow-200 hover:(bg-yellow-300) font-bold rounded-md w-full"
					type="submit"
					disabled={loading}
					onClick={(e) => {
						e.preventDefault();
						handleLoginButton();
					}}
				>
					{loading && <Spinner className="h-5 w-5" />}
					Login
				</button>
			</form>
			<div className="text-center my-10">
				Don’t have an account?
				<Link href="/auth/signup">
					<a className="underline ml-2">Sign up</a>
				</Link>
			</div>
			{/* <div>
				{user && <div>{JSON.stringify(user)}</div>}
				{loading && <div>loading</div>}
			</div> */}
		</div>
	);
}

export default SignUp;
