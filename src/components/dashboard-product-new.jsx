"use client";
import { createProductAction } from "@/actions/product-actions";
import React from "react";
import { Button, Form } from "react-bootstrap";

// name should be given to the form.control.It acts as a key when we are sending formdata
//I.e : key : title, value : "whatever written inside that form.control"

export const DashboardProductNew = () => {
	return (
		<Form action={createProductAction}>
			<Form.Group className="mb-3" controlId="title">
				<Form.Label>Title</Form.Label>
				<Form.Control type="text" name="title" />
                
			</Form.Group>
			<Form.Group className="mb-3" controlId="description">
				<Form.Label>Description</Form.Label>
				<Form.Control type="text" as="textarea" name="description" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="price">
				<Form.Label>Price</Form.Label>
				<Form.Control type="number" name="price" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="category">
				<Form.Label>Category</Form.Label>
				<Form.Select aria-label="Default select example" name="category">
					<option value="">Select a category</option>
					<option value="Jewellery">Jewellery</option>
					<option value="Beauty">Beauty</option>
					<option value="Shoes">Shoes</option>
					<option value="Grocery">Grocery</option>
					<option value="Outdoors">Outdoors</option>
					<option value="Toys">Toys</option>
					<option value="Sports">Sports</option>
				</Form.Select>
			</Form.Group>
			<Button variant="primary" type="submit">
				Create
			</Button>
		</Form>
	);
};
