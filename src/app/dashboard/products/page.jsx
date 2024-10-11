import { DashboardProductList } from "@/components/dashboard-product-list";
import React from "react";

const Page = async () => {
	const res = await fetch("https://dummyjson.com/products");
	const data = await res.json();

	return (
		<div>
			<DashboardProductList products={data.products} />
		</div>
	);
};

export default Page;
