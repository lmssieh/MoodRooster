import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/clientApp";
import { signOut } from "firebase/auth";
import useUserState from "../store/auth/user";

function Navbar() {
	const [user, loading, error] = useAuthState(auth);
	const stateSetUser = useUserState((state) => state.setUser);

	const logout = () => {
		signOut(auth)
			.then(() => {
				stateSetUser(null);
			})
			.catch((e) => {
				console.log(e);
			});
		console.log("logged out");
	};
	return (
		<div>
			<nav className="py-2 flex justify-between items-center">
				<h1 className="font-bold text-2xl">
					<Link href="/web">MoodRooster</Link>
				</h1>
				{!user && (
					<ul className="flex gap-6">
						<li className="py-2 w-[112px] text-center bg-black border-1 border-white rounded-md cursor-pointer hover hover:opacity-91">
							<Link href="/auth/login">Login</Link>
						</li>
						<li
							className="py-2 w-[112px] text-center border-1 text-woodsmoke-700
					bg-white rounded-md cursor-pointer hover:opacity-91"
						>
							<Link href="/auth/signup">Sign Up</Link>
						</li>
					</ul>
				)}
				{user && (
					<div>
						<button onClick={logout}>Logout</button>
					</div>
				)}
			</nav>
		</div>
	);
}

export default Navbar;
