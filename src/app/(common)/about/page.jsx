import Link from "next/link";
import React from "react";

const Page = () => {
	return (
		<div>
			About Page
			<p>
				<Link href="/">Home</Link>
			</p>
			
			<Link
				href={{
					pathname: "/dashboard/products",
					query: {
						q: "test",
						page: 1,
						limit: 12,
						sort: "name",
						order: "asc",
						status: "active",
						category: "electronics",
					},
				}}
			>
				Products
			</Link>
		</div>
	);
};

export default Page;
