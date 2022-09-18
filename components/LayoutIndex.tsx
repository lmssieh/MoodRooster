import Navbar from "components/Navbar";
import type { ReactNode } from "react";
import MobileNavigation from "components/mobile/MobileNavigation";

function LayoutIndex({ children }: { children: ReactNode }) {
	return (
		<div className=" bg-woodsmoke-900 text-white relative">
			<div className="max-w-[1100px]  min-h-[100vh] flex flex-col  m-auto">
				<div className="py-2">
					<Navbar />
				</div>
				<div className="flex-1 flex flex-col h-full ">{children}</div>
				<div className="fixed bottom-0 w-full">
					<MobileNavigation className="" />
				</div>
			</div>
		</div>
	);
}

export default LayoutIndex;
