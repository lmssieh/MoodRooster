import create from "zustand";
import { persist } from "zustand/middleware";

interface dayInfo {
	text?: string;
	mood?: number;
}

interface Dates {
	[key: string]: dayInfo;
}

interface MoodsState {
	selectedDate: string | null;
	selectDate: (date: string) => void;
	dates: Dates;
	addDate: (date: string, info) => void;
	deleteDate: (date: string) => void;
	updateMood: (date: string, mood: dayInfo) => void;
}

const useStore = create(
	persist<MoodsState>(
		(set) => ({
			selectedDate: null,
			selectDate: (date) => set((state) => ({ selectedDate: date })),
			dates: {},
			addDate: (date, info) =>
				set((state) => {
					if (state.dates[date]) {
						return {
							dates: {
								...state.dates,
								[date]: { ...state.dates[date], ...info },
							},
						};
					}

					return { dates: { ...state.dates, [date]: { info } } };
				}),
			deleteDate: (date) =>
				set((state) => {
					const dates = state.dates;
					delete dates[date];
					return { dates: { ...dates } };
				}),
			updateMood: (date, mood) =>
				set((state) => ({
					dates: { ...state.dates, [date]: { ...state.dates[date], ...mood } },
				})),
		}),
		{
			name: "moodsState",
		}
	)
);

export default useStore;
