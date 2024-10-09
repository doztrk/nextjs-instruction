import { Pageheader } from "@/components/page-header";
import Link from "next/link";
import React from "react";

export const metadata = {
	title: "About Us",
	description: "Cheap electronic devices",
};

const Page = () => {
	return (
		<>
			<Pageheader title="About Us" />
			<p></p>
		</>
	);
};

export default Page;
