import useStore from "../store/moodsState";
import { moodsObj } from "../utils/info";

function MoodStats() {
	const dates = useStore((state) => state.dates);

	function percentage(partialValue: number, totalValue: number) {
		return ((100 * partialValue) / totalValue).toFixed() + "%";
	}
	const moodsTotal: { [key: string]: number } = {};
	Object.keys(dates).forEach((ele) => {
		const mood = dates[ele].mood;
		if (moodsTotal[mood]) {
			moodsTotal[mood]++;
			return;
		}
		moodsTotal[mood] = 1;
	});

	const max = Math.max(...Object.values(moodsTotal));
	return (
		<div className="w-[350px]">
			<h2 className="font-mono font-bold text-xl m-2 ">Mood Chart</h2>
			<div className="flex flex-col gap-2 children:flex-1">
				{Object.values(moodsObj).map((ele, index) => (
					<div key={ele.name} className="flex  items-center  h-full gap-2">
						<div className="bg-gray-500/20 h-8 w-full rounded-md">
							<div
								className="mr-auto h-full bg-yellow-400  rounded-md "
								style={{
									backgroundColor: ele.color,
									width: percentage(moodsTotal[ele.id], max),
								}}
							>
								<img
									className="ml-auto h-full"
									src={`/images/moods/${ele.name}.png`}
								></img>
							</div>
						</div>
						<div className="flex flex-col items-center text-sm my-1">
							{/* <div
								className="bg-purple-600 rounded-full h-2 w-2 my-1"
								style={{ visibility: index < 4 ? "visible" : "hidden" }}
							></div> */}
							<span className="text-center">
								{percentage(moodsTotal[ele.id], max)}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default MoodStats;
