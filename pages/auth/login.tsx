import { NextPage } from "next";
import Login from "../../components/auth/Login";

const login: NextPage = () => {
	return (
		<div className="max-w-[1200px]  px-3">
			<Login />
		</div>
	);
};

export default login;
