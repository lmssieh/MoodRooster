import type { NextPage } from "next";
import Head from "next/head";
import YearlyCalendar from "../components/YearlyCalendar/YearlyCalendar";

const YearlyView: NextPage = () => {
	return (
		<div className="max-w-[1200px] flex-1 h-full flex flex-col px-3">
			<Head>
				<title>Moods</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<YearlyCalendar />
		</div>
	);
};

export default YearlyView;
