import { DashboardProductList } from "@/components/dashboard-product-list";
import React from "react";

const Page = async () => {
	const res = await fetch(`https://66c395ffd057009ee9c0b957.mockapi.io/products/${params.id}`);
	const data = await res.json();

	return (
		<div>
			<DashboardProductList products={data} />
		</div>
	);
};

export default Page;
