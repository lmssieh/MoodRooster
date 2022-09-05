import dayjs from "dayjs";
import useStore from "../../store/moodsState";
import { days, moodsObj } from "../../utils/info";

interface Dates {
	[key: string]: number;
}

interface Props {
	startOffset: number;
	daysInMonth: number;
	// today: string;
	selectedDate: string | null;
	selectDate: (payload: number) => void;
	date: {
		year: number;
		month: number;
	};
}
function MonthlyView({
	startOffset,
	daysInMonth,
	selectedDate,
	selectDate,
	date,
}: Props) {
	const dates = useStore((state) => state.dates);
	const dd = dayjs();
	const today = `${dd.year()}-${dd.month() + 1}-${dd.date()}`;

	const isToday = (day: number) => {
		return today === `${date.year}-${date.month}-${day}`;
	};

	const isSelectedDay = (day: number) => {
		return selectedDate === `${date.year}-${date.month}-${day}`;
	};

	const isFuture = (day: number) =>
		new Date(today).getTime() <
		new Date(`${date.year}-${date.month}-${day}`).getTime();

	const isMarked = (day: number) => {
		return Boolean(dates[`${date.year}-${date.month}-${day}`]);
	};

	const getMoodColor = (day: number) => {
		const moodId = dates[`${date.year}-${date.month}-${day}`]?.mood;
		return moodsObj[moodId]?.color;
	};
	const handleDateClick = (day: number) => {
		if (isFuture(day)) return;
		selectDate(day);
	};

	const styles = (day: number) => {
		const stylesObject = {};
	};
	return (
		<div className="">
			<div className="grid grid-cols-7 grid-rows-7 children:(aspect-square h-12)">
				{days.map((day) => (
					<div key={day} className="flex justify-center items-center opaci ">
						{day.substr(0, 2)}
					</div>
				))}
				{[...Array(startOffset)].map((e, index) => {
					return <div key={index}></div>;
				})}
				{[...Array(daysInMonth)].map((day, index) => {
					return (
						<div
							key={index}
							style={
								getMoodColor(index + 1)
									? { background: getMoodColor(index + 1), color: "" }
									: { background: "", color: "" }
							}
							onClick={() => handleDateClick(index + 1)}
							className={`
							${isFuture(index + 1) ? "opacity-20" : ""}
							${isSelectedDay(index + 1) ? "border-2" : ""}
							${isToday(index + 1) && !isSelectedDay(index + 1) ? "text-black bg-white" : ""} 
							bg-dark-100/50 font-bold cursor-pointer flex  justify-center items-center`}
						>
							{index + 1}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default MonthlyView;
