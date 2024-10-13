"use client";
import { updateProductAction } from "@/actions/product-actions";
import React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useFormState } from "react-dom";
import { ButtonReturnBack } from "./button-return-back";

export const DashboardProducEdit = ({ product }) => {
	const initialState = { ok: false, message: "", errors: null };

	const [state, dispatch] = useFormState(updateProductAction, initialState);

	return (
		<>
			{!state.ok && state.message ? <Alert variant="danger">{state.message}</Alert> : null}
			{state.ok && state.message ? <Alert variant="success">{state.message}</Alert> : null}

			<Form action={dispatch}>
				<input type="hidden" name="id" value={product.id} />
				<Form.Group className="mb-3" controlId="title">
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" name="title" isInvalid={!!state.errors?.title} defaultValue={product.title} />
					<Form.Control.Feedback type="invalid">{!!state.errors?.title}</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className="mb-3" controlId="description">
					<Form.Label>Description</Form.Label>
					<Form.Control
						type="text"
						as="textarea"
						name="description"
						isInvalid={!!state.errors?.description}
						defaultValue={product.description}
					/>
					<Form.Control.Feedback type="invalid">{!!state.errors?.description}</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className="mb-3" controlId="price">
					<Form.Label>Price</Form.Label>
					<Form.Control type="number" name="price" isInvalid={!!state.errors?.price} defaultValue={product.price} />
					<Form.Control.Feedback type="invalid">{!!state.errors?.price}</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className="mb-3" controlId="category">
					<Form.Label>Category</Form.Label>
					<Form.Select
						aria-label="Default select example"
						name="category"
						isInvalid={!!state.errors?.category}
						defaultValue={product.category}
					>
						<option value="">Select a category</option>
						<option value="Jewelery">Jewelery</option>
						<option value="Beauty">Beauty</option>
						<option value="Shoes">Shoes</option>
						<option value="Grocery">Grocery</option>
						<option value="Outdoors">Outdoors</option>
						<option value="Toys">Toys</option>
						<option value="Sports">Sports</option>
					</Form.Select>
					<Form.Control.Feedback type="invalid">{!!state.errors?.category}</Form.Control.Feedback>
				</Form.Group>
				<Button variant="primary" type="submit" className="mt-3 me-3">
					Edit
				</Button>
				<ButtonReturnBack />
			</Form>
		</>
	);
};
