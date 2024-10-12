import { Pageheader } from "@/components/page-header";
import { ProductDetails } from "@/components/product-details";
import { RelatedProducts } from "@/components/related-products";
import React from "react";
import Swiper from "swiper";

const API_URL = "https://66c395ffd057009ee9c0b957.mockapi.io/products";
//DYNAMIC ROUTING

/* Dynamic Routing'de generateMetaData, statik'te metaData var name kullanılır. */
export const generateMetadata = async ({ params }) => {
	const res = await fetch(`https://66c395ffd057009ee9c0b957.mockapi.io/products/${params.id}`);
	const data = await res.json();
	return {
		title: data.title,
		description: data.description,
	};
};

const Page = async ({ params }) => {
	/* 	console.log("Product Detail's page dynamic routing9");
	 */
	const fetchProduct = (await fetch(`${API_URL}/${params.id}`)).json();
	const fetchRelatedProducts = (await fetch(API_URL)).json();

	const [product, relatedProducts] = await Promise.all([fetchProduct, fetchRelatedProducts]);

	return (
		<>
			<Pageheader title={product.title} />
			<ProductDetails product={product} />
			<RelatedProducts relatedProducts={relatedProducts} />
		</>
	);
};

export default Page;
