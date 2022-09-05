import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { months } from "../../utils/info";

interface Props {
	className?: string;
	month: number;
	year: number;
	nextMonth: () => void;
	prevMonth: () => void;
}

function MonthlyNavigation({
	className,
	month,
	year,
	nextMonth,
	prevMonth,
}: Props) {
	const isFuture = () =>
		new Date().getTime() < new Date(`${year}-${month}`).getTime();

	return (
		<div className={`flex items-center justify-between ${className || ""}`}>
			<h3 className="font-bold font-mono">
				{months[month - 1]} / {year}
			</h3>
			<div className="flex items-center gap-1">
				<button
					onClick={prevMonth}
					className="flex items-center border-1 rounded-md py-1 px-2"
				>
					<FiChevronLeft />
				</button>
				<button
					onClick={nextMonth}
					className="flex items-center border-1 rounded-md py-1 px-2"
				>
					<FiChevronRight />
				</button>
			</div>
			{/* <button onClick={() => now.month--}>Front</button> */}
		</div>
	);
}

export default MonthlyNavigation;
