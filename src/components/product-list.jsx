import React from "react";
import { Col, Row } from "react-bootstrap";
import { ProductCard } from "./product-card";

export const ProductList = ({ products }) => {
	return (
		<Row xs={1} md={2} lg={3} xl={4} className="g-4 my-5">
			{products.map((item) => (
				<Col key={item.id}>
					<ProductCard {...item} />
				</Col>
			))}
		</Row>
	);
};
