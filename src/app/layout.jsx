import { montserrat, roboto } from "@/helpers/fonts";
import "../global.scss";

export const metadata = {
	title: {
		template: " %s | Cosmo Shop",
		default: "Cosmo Shop",
		description: "Cheap Electronic Devices",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${roboto.variable} ${montserrat.variable}`}>
			<body>{children}</body>
		</html>
	);
}
