import { NextPage } from "next";
import SignUpComponent from "../../components/auth/SignUp";

const signup: NextPage = () => {
	return (
		<div className="max-w-[1200px]  px-3">
			<SignUpComponent />
		</div>
	);
};

export default signup;
