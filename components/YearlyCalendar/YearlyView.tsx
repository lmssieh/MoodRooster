import dayjs from "dayjs";
import { months, moodsObj } from "../../utils/info";

interface Props {
	year: number;
	getMoodColor: ({
		day,
		month,
		year,
	}: {
		day: number;
		month: number;
		year: number;
	}) => string;
}

function YearlyView({ year, getMoodColor }: Props) {
	const daysInMonth = (month: number) => {
		return dayjs(`${year}-${month}`).daysInMonth();
	};
	const startOffset = (month: number) => {
		return dayjs(`${year}-${month}`).startOf("month").day();
	};

	return (
		<div className="grid grid-cols-3 md:(grid-cols-4)  gap-3">
			{months.map((month, monthIndex) => {
				return (
					<div key={monthIndex}>
						<h3 className="py-4 font-bold text-gray-300 font-mono">
							{months[monthIndex].toUpperCase()}
						</h3>
						<div className="grid grid-cols-7 grid-rows-7">
							{[...Array(startOffset(monthIndex + 1))].map((e, index) => {
								return <div key={index}></div>;
							})}
							{[...Array(daysInMonth(monthIndex + 1))].map((ele, dayIndex) => (
								<div
									key={dayIndex + 1}
									style={
										getMoodColor({
											year,
											month: monthIndex + 1,
											day: dayIndex,
										})
											? {
													background: getMoodColor({
														year,
														month: monthIndex + 1,
														day: dayIndex,
													}),
													color: "",
											  }
											: { background: "", color: "" }
									}
									className="bg-dark-400/50  aspect-square flex justify-center items-center"
								>
									{/* {dayIndex + 1} */}
								</div>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default YearlyView;
