import Navbar from "../components/Navbar";
import type { ReactNode } from "react";

function LayoutIndex({ children }: { children: ReactNode }) {
	return (
		<div className=" bg-woodsmoke-900 text-white">
			<div className="max-w-[1100px]  min-h-[100vh] flex flex-col  m-auto">
				<div className="py-2">
					<Navbar />
				</div>
				<div className="flex-1 flex flex-col h-full ">{children}</div>
			</div>
		</div>
	);
}

export default LayoutIndex;
