import { Pageheader } from "@/components/page-header";
import React from "react";

//DYNAMIC ROUTING

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
