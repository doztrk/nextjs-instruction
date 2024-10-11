"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge, Card } from "react-bootstrap";

export const ProductCard = ({ title, price, image, id }) => {
	return (
		<Card className="h-100" href={`/products/${id}`} as={Link}>
			<div className="position-relative" style={{ height: "200px" }}>
				<Card.Img variant="top" src={image} as={Image} fill alt={title} style={{ objectFit: "contain" }} />
			</div>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>
					<Badge bg="primary">${price}</Badge>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
