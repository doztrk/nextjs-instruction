import { Pageheader } from "@/components/page-header";
import { ProductList } from "@/components/product-list";
import React from "react";

export const metadata = {
	title: "Products",
	description: "Cheap electronic devices",
};

const Page = async () => {
	/* 	

	This works in client-side but we want to fetch this products in server-side
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	},[]); 
	*/

	const res = await fetch("https://66c395ffd057009ee9c0b957.mockapi.io/products");
	const data = await res.json();

	console.log("Product's page static");
	return (
		<>
			<Pageheader title="Products" />
			<ProductList products={data} />
		</>
	);
};

export default Page;
