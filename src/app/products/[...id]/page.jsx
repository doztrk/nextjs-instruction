import React from "react";

//DYNAMIC ROUTING

const Page = ({params}) => {
	console.log(params)
	return (
		<div>
			<div>Product details page {params.id}</div>
		</div>
	);
};

export default Page;
