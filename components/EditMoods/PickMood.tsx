import dayjs from "dayjs";
import useStore from "../../store/moodsState";
import { days, months } from "../../utils/info";
import EditText from "./EditText";
import SelectMood from "./SelectMood";
function PickMood() {
	const selectedDate = useStore((state) => state.selectedDate);
	const dates = useStore((state) => state.dates);

	const current = dayjs(selectedDate);
	const date = {
		dayOfWeek: current.day(),
		day: current.date(),
		month: current.month() + 1,
		year: current.year(),
	};

	console.log(selectedDate, date);
	return (
		<div>
			<div>{`${months[date.month - 1]}/${date.day}`}</div>
			<SelectMood />
			<EditText />
		</div>
	);
}

export default PickMood;
