import { Pageheader } from "@/components/page-header";
import React from "react";

//DYNAMIC ROUTING

export const generateMetadata = () => {
	//fetch data
	return {
		title: " DYNAMIC Product Details",
		description: "Cheap electronic devices",
	};
};

const Page = ({ params }) => {
	console.log(params);
	return (
		<>
			<Pageheader title="Product Details" />
			Product details page {params.id}
		</>
	);
};

export default Page;
