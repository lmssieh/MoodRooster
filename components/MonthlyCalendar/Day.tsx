import Dates from "../types/Dates";
import useStore from "../store/moods";
import { useEffect } from "react";
import { adobeColors as moodColors } from "../info";

interface Props {
	year: number;
	month: number;
	day: number;
	isToday: boolean;
}

function Day({ year, month, day, isToday }: Props) {
	// const selectDate = useStore((state) => state.selectDate);
	// const dates = useStore((state) => state.dates);
	// const selectedDay = useStore((state) => state.selectedDate);

	// const moodColors = ["#26867d", "#2c9d92", "#32b3a6", "#39cabb", "#3fe0d0"];

	const date = `${year}-${month + 1}-${day}`;

	// const styles =
	// 	selectedDay == date
	// 		? {
	// 				border: "2px solid #000",
	// 		  }
	// 		: {};

	const setSelectedDate = () => {
		// selectDate(date);
		console.log("sneed");
	};

	return (
		<div
			className="text-center relative aspect-square flex items-center justify-center
			bg-purple-200 bg-opacity-80 h-[25px] m-[1px]
			cursor-pointer tooltip top select-none "
			title={date}
			style={{
				backgroundColor: moodColors[dates[date]?.mood] || "",
				...styles,
			}}
			onClick={(e) => setSelectedDate(e)}
		>
			{/* {isToday === date && <div className="font-bold">{day}</div>} */}
		</div>
	);
}

export default Day;
