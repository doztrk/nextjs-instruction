import { Button } from "react-bootstrap";
import Link from "next/link";
import React from "react";
import { TfiPlus } from "react-icons/tfi";

export const ButtonNewProduct = () => {
	return (
		<Button variant="warning" as={Link} href="/dashboard/products/new">
			<TfiPlus /> New
		</Button>
	);
};
