import Link from "next/link";
import { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import useUserState from "../../store/auth/user";
import Spinner from "../utils/spinner";

interface User {
	username: string;
	email: string;
	moodsDates: {};
	isPremium: boolean;
}

function SignUp() {
	const [email, setEmail] = useState("");
	const [sendPasswordResetEmail, sending, error] =
		useSendPasswordResetEmail(auth);
	const stateUser = useUserState((state) => state.user);
	const stateSetUser = useUserState((state) => state.setUser);
	const [customErr, setCustomErr] = useState("");

	function handleResetButton() {
		setCustomErr("");

		if (!email) {
			setCustomErr("Please enter a valid email address.");
			return;
		}
		sendPasswordResetEmail(email).then(console.log);

		setCustomErr(`you're already logged in`);
	}

	// useEffect(() => {
	// 	if (!user) return;
	// 	createNewUserProfile();
	// 	async function createNewUserProfile() {
	// 		const { uid, email } = user.user;
	// 		console.log(uid, email);
	// 		if (!uid || !email) return;
	// 		try {
	// 			// const newUser: User = {
	// 			// 	username: null,
	// 			// 	email: email.trim(),
	// 			// 	moodsDates: {},
	// 			// 	isPremium: false,
	// 			// };

	// 			const re = doc(db, "users", uid);
	// 			const docSnap = await getDoc(re);
	// 			const d = docSnap.data();
	// 			console.log(d);
	// 			// stateSetUser(newUser);
	// 		} catch (e) {
	// 			console.error("Error adding document: ", e, e.message);
	// 		}
	// 	}
	// }, [user]);
	return (
		<div className="max-w-[500px] m-auto">
			<div className="my-10">
				<h3 className="text-4xl font-bold py-5">Forgot your password?</h3>
				<p>
					To reset your password, please enter the email address of your
					account.
				</p>
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
				<div className="text-red-500 py-1 font-bold children:(block)">
					{error && <span>{error.code}</span>}
					{customErr && <span>{customErr}</span>}
				</div>
				<button
					className="flex items-center justify-center gap-3 my-2 py-2 text-yellow-700  bg-yellow-200 hover:(bg-yellow-300) font-bold rounded-md w-full"
					type="submit"
					disabled={sending}
					onClick={(e) => {
						e.preventDefault();
						handleResetButton();
					}}
				>
					{sending && <Spinner className="h-5 w-5" />}
					Reset My Password
				</button>
			</form>

			<div className="underline text-center my-10">
				<Link href="/auth/login">Go to login</Link>
			</div>
			{/* <div>
				{user && <div>{JSON.stringify(user)}</div>}
				{loading && <div>loading</div>}
			</div> */}
		</div>
	);
}

export default SignUp;
