import { NextPage } from "next";
import ForgotPassword from "../../components/auth/ForgotPassword";

const password: NextPage = () => {
	return (
		<div className="max-w-[1200px]  px-3">
			<ForgotPassword />
		</div>
	);
};

export default password;
