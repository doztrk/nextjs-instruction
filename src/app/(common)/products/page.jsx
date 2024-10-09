import { Pageheader } from "@/components/page-header";
import React from "react";


export const metadata = {
	title: "Products",
	description: "Cheap electronic devices",
};

const Page = () => {

	console.log("Product's page static")
	return (
		<>
			<Pageheader title="Products" />
		</>
	);
};

export default Page;
