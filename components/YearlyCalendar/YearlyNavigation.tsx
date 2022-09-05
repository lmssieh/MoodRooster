import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Props {
	className?: string;
	year: number;
	prevYear: () => void;
	nextYear: () => void;
}

function YearlyNavigation({ className, year, prevYear, nextYear }: Props) {
	return (
		<div className={`flex items-center justify-between ${className || ""}`}>
			<h3 className="font-bold font-mono">{year}</h3>
			<div className="flex items-center gap-1">
				<button
					onClick={prevYear}
					className="flex items-center border-1 rounded-md py-1 px-2"
				>
					<FiChevronLeft />
				</button>
				<button
					onClick={nextYear}
					className="flex items-center border-1 rounded-md py-1 px-2"
				>
					<FiChevronRight />
				</button>
			</div>
			{/* <button onClick={() => now.month--}>Front</button> */}
		</div>
	);
}

export default YearlyNavigation;
