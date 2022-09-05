import "windi.css";
import LayoutIndex from "../components/LayoutIndex";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<LayoutIndex>
			<Component {...pageProps} />
		</LayoutIndex>
	);
}

export default MyApp;
