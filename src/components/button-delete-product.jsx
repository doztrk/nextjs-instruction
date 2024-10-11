"use client";
import React from "react";
import { Button } from "react-bootstrap";
import { TfiTrash } from "react-icons/tfi";

export const ButtonDeleteProduct = ({ id }) => {
	const handleDelete = () => {
		const res = confirm("Are you sure you want to delete?");
		if (!res) return;

		//delete product
	};

	return (
		<Button variant="link" onClick={handleDelete}>
			<TfiTrash />
		</Button>
	);
};
