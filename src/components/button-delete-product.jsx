"use client";
import { deleteProductAction } from "@/actions/product-actions";
import React from "react";
import { Button } from "react-bootstrap";
import { TfiTrash } from "react-icons/tfi";

export const ButtonDeleteProduct = ({ id }) => {
	const handleDelete = async () => {
		const answer = confirm("Are you sure you want to delete?");
		if (!answer) return;

		//delete product

		const res = await deleteProductAction(id);
		if (res?.message) {
			alert(res.message);
		}
	};

	return (
		<Button variant="link" onClick={handleDelete}>
			<TfiTrash />
		</Button>
	);
};
