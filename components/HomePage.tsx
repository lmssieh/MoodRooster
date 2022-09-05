import MonthlyCalendar from "../components/MonthlyCalendar/MonthlyCalendar";
import PickMood from "./EditMoods/PickMood";
import MoodStats from "./MoodStats";

function HomePage() {
	return (
		<div className=" py-4 flex-1 flex flex-wrap children:(flex-1 p-4) ">
			<div className="m-auto children:m-auto">
				<div className="w-[400px]">
					<PickMood />
				</div>
			</div>
			<div className="bg-woodsmoke-800 rounded-md children:m-auto">
				<MonthlyCalendar />
				<MoodStats />
			</div>
		</div>
	);
}

export default HomePage;
