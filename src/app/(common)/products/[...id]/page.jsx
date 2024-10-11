import { Pageheader } from "@/components/page-header";
import { ProductDetails } from "@/components/product-details";
import React from "react";

//DYNAMIC ROUTING

/* Dynamic Routing'de generateMetaData, statik'te metaData var name kullanılır. */
export const generateMetadata = async ({ params }) => {
	const res = await fetch(`https://dummyjson.com/products/${params.id}`);
	const data = await res.json();
	return {
		title: data.title,
		description: data.description,
	};
};

const Page = async ({ params }) => {
	/* 	console.log("Product Detail's page dynamic routing9");
	 */
	const res = await fetch(`https://dummyjson.com/products/${params.id}`);
	const data = await res.json();
	return (
		<>
			<Pageheader title={data.title} />
			<ProductDetails product={data} />
		</>
	);
};

export default Page;
