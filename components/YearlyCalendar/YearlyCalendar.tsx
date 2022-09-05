import dayjs, { type Dayjs } from "dayjs";
import { useReducer } from "react";
import YearlyNavigation from "./YearlyNavigation";
import YearlyView from "./YearlyView";
import { moodsObj } from "../../utils/info";
import useStore from "../../store/moodsState";

interface State {
	date: Dayjs;
}

interface Action {
	type: "NextYear" | "PrevYear";
}

function reducer(state: State, action: Action) {
	switch (action.type) {
		case "NextYear": {
			return { ...state, ...{ date: state.date.add(1, "year") } };
		}
		case "PrevYear": {
			return { ...state, ...{ date: state.date.add(-1, "year") } };
		}
	}
}

function YearlyCalendar() {
	const dates = useStore((state) => state.dates);
	const [state, dispatch] = useReducer(reducer, {
		date: dayjs(),
	});

	const now = {
		date: state.date.date(),
		month: state.date.month() + 1,
		year: state.date.year(),
		daysInMonth: state.date.daysInMonth(),
		startOffset: state.date.startOf("month").day(),
	};

	const getMoodColor = ({
		day,
		month,
		year,
	}: {
		day: number;
		month: number;
		year: number;
	}) => {
		const moodId = dates[`${year}-${month}-${day}`]?.mood;
		if (!moodId) return;
		return moodsObj[moodId]?.color;
	};

	return (
		<div>
			<YearlyNavigation
				year={now.year}
				prevYear={() => dispatch({ type: "PrevYear" })}
				nextYear={() => dispatch({ type: "NextYear" })}
			/>
			<YearlyView getMoodColor={getMoodColor} year={now.year} />
		</div>
	);
}

export default YearlyCalendar;
