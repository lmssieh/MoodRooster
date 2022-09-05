import dayjs, { type Dayjs } from "dayjs";
import { useReducer, useState } from "react";
import useStore from "../../store/moodsState";
import { months } from "../../utils/info";
import MonthlyNavigation from "./MonthNavigation";
import MonthlyView from "./MonthsView";
// import { months as monthsArr } from "../info.js";
// import Months from "./Months";

interface State {
	date: Dayjs;
}

interface Action {
	type: "NextMonth" | "PrevMonth";
}

function reducer(state: State, action: Action) {
	switch (action.type) {
		case "NextMonth": {
			const nextMonth = state.date.add(1, "month");
			const isFuture = dayjs().isBefore(nextMonth, "month");
			if (isFuture) return state;
			return { ...state, ...{ date: nextMonth } };
		}
		case "PrevMonth": {
			return { ...state, ...{ date: state.date.add(-1, "month") } };
		}
	}
}

function MonthlyCalendar() {
	const [state, dispatch] = useReducer(reducer, {
		date: dayjs(),
	});
	const selectedDay = useStore((state) => state.selectedDate);
	const selectDate = useStore((state) => state.selectDate);
	const updateMood = useStore((state) => state.updateMood);

	const now = {
		date: state.date.date(),
		month: state.date.month() + 1,
		year: state.date.year(),
		daysInMonth: state.date.daysInMonth(),
		startOffset: state.date.startOf("month").day(),
	};

	return (
		<div className="flex flex-col w-[350px]">
			<MonthlyNavigation
				month={now.month}
				year={now.year}
				nextMonth={() => dispatch({ type: "NextMonth" })}
				prevMonth={() => dispatch({ type: "PrevMonth" })}
				className="py-4"
			/>
			<MonthlyView
				startOffset={now.startOffset}
				daysInMonth={now.daysInMonth}
				selectedDate={selectedDay}
				selectDate={(payload) =>
					selectDate(`${now.year}-${now.month}-${payload}`)
				}
				date={{ year: now.year, month: now.month }}
			/>
		</div>
	);
}

export default MonthlyCalendar;
