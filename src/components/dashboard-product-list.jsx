import React from "react";
import { Button, Table } from "react-bootstrap";
import { ButtonDeleteProduct } from "./button-delete-product";
import { ButtonEditProduct } from "./button-edit-product";
import { ButtonNewProduct } from "./button-new-product";

export const DashboardProductList = ({ products }) => {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>#</th>
					<th>Title</th>
					<th>Category</th>
					<th>Price</th>
					<th>
                        <ButtonNewProduct/>
                    </th>
				</tr>
			</thead>
			<tbody>
				{products.map((item, index) => (
					<tr key={item.id}>
						<td>{index + 1}</td>
						<td>{item.title}</td>
						<td>{item.category}</td>
						<td>${item.price}</td>
						<td>
							<ButtonEditProduct id={item.id} />
							<ButtonDeleteProduct id={item.id} />
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};
