import { CgSpinner } from "react-icons/cg";

interface Props {
	className?: string;
}

function Spinner({ className }: Props) {
	return (
		<CgSpinner
			className={`animate-rotate-in-down-right animate-infinite animate-spin ${
				className || ""
			}`}
		/>
	);
}

export default Spinner;
