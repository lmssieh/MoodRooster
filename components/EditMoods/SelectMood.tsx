import useStore from "../../store/moodsState";

interface Mood {
	[key: number]: {
		id: number;
		name: string;
		emote: string;
		color: string;
	};
}

const moodsObj: Mood = {
	0: {
		id: 0,
		name: "amazing",
		emote: "1f600",
		color: "#26867d",
	},
	1: {
		id: 1,
		name: "ok",
		emote: "1f642",
		color: "#2c9d92",
	},
	2: {
		id: 2,
		name: "tired",
		emote: "1f62b",
		color: "#32b3a6",
	},
	3: {
		id: 3,
		name: "sad",
		emote: "2639",
		color: "#39cabb",
	},
	4: {
		id: 4,
		name: "stressed",
		emote: "1f62e-200d-1f4a8",
		color: "#3fe0d0",
	},
};

function SelectMood({ classes }: { classes?: string }) {
	const selectedDate = useStore((state) => state.selectedDate);
	const dates = useStore((state) => state.dates);
	const updateMood = useStore((state) => state.updateMood);

	const handleEmoteClick = (mood: number) => {
		if (selectedDate) {
			updateMood(selectedDate, { mood });
		}
	};
	const selectedMood = (day: number) => {
		if (!selectedDate) return;
		return dates[selectedDate]?.mood;
	};
	return (
		<div className={`py-2 ${classes || ""}`}>
			{/* {selectedDate} */}
			<div className="grid grid-cols-5  my-2">
				{Object.values(moodsObj).map((mood, index) => {
					// const styles =
					// 	selectedDatesMood?.id == index ? { border: "2px solid #000" } : {};
					return (
						<div
							key={mood.emote}
							onClick={() => handleEmoteClick(index)}
							className="cursor-pointer "
						>
							<div
								className="flex flex-col items-center justify-center"
								style={{
									backgroundColor: mood.color,

									// ...styles,
								}}
							>
								<img
									className={`block ${
										selectedMood() === index && "border-2 border-yellow-400"
									}`}
									src={`images/moods/${mood.name}.png`}
								/>
							</div>
							<div className="text-sm font-mono font-bold text-center">
								{mood.name}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default SelectMood;
