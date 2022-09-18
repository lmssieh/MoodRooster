import { useRouter } from "next/router";
import { FiHome, FiUser, FiCalendar, FiBarChart2 } from "react-icons/fi";

interface Props {
	className?: string;
}

function MobileNavigation({ className }: Props) {
	const router = useRouter();

	return (
		<div className={className || ""}>
			<div className="max-w-[640px] bg-dark-300 rounded-xl my-1 mx-2 sm:mx-auto ">
				<div className="flex justify-around items-center py-2">
					<div
						className={`flex justify-center text-sm flex-1 ${
							router.route === "/web" && "text-purple-400"
						}`}
					>
						<div
							onClick={() => router.push("/web")}
							className="inline-block m-auto text-center cursor-pointer inline-flex flex-col items-center"
						>
							<FiHome className="w-5 h-5 " />
							home
						</div>
					</div>
					<div
						className={`flex justify-center text-sm flex-1 ${
							router.route === "/yearlyview" && "text-purple-400"
						}`}
					>
						<div
							onClick={() => router.push("/yearlyview")}
							className="inline-block m-auto text-center cursor-pointer inline-flex flex-col items-center"
						>
							<FiCalendar className="w-5 h-5 " />
							calendar
						</div>
					</div>
					<div
						className={`flex justify-center text-sm flex-1 ${
							router.route === "/stats" && "text-purple-400"
						}`}
					>
						<div
							onClick={() => router.push("/stats")}
							className="inline-block m-auto text-center cursor-pointer inline-flex flex-col items-center"
						>
							<FiBarChart2 className="w-5 h-5 " />
							stats
						</div>
					</div>
					<div
						className={`flex justify-center text-sm flex-1 ${
							router.route === "/profile" && "text-purple-400"
						}`}
					>
						<div
							onClick={() => router.push("/profile")}
							className="inline-block m-auto text-center cursor-pointer inline-flex flex-col items-center"
						>
							<FiUser className="w-5 h-5 " />
							profile
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MobileNavigation;
