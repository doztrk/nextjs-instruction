"use server";
import { transformYupErrors } from "@/helpers/form-validation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import * as Yup from "yup";

const FormSchema = Yup.object({
	title: Yup.string().required("Title is required"),
	description: Yup.string().required("Description is required"),
	price: Yup.number().typeError("Price must be a number").required("Price is required"),
	category: Yup.string().required("Category is required"),
});
export const createProductAction = async (prevState, formData) => {
	/*     const title = formData.get("title");
    const description = formData.get("description"); 
   */

	//Or we turn formData into JSON object

	//1-Get Data amd convert it to Json
	const fields = Object.fromEntries(formData);
	console.log(formData);

	//2-Validate
	try {
		FormSchema.validateSync(fields, { abortEarly: false });

		//3- Mutation
		const res = await fetch("https://66c395ffd057009ee9c0b957.mockapi.io/products", {
			method: "POST",
			body: JSON.stringify(fields),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await res.json();
		if (!res.ok) {
			throw new Error(data.message);
		}

		//4-Revalidation

		revalidatePath("/dashboard/products");
		revalidatePath("/products");

		return {
			ok: true,
			message: "Product created successfully",
			errors: null,
		};
	} catch (error) {
		if (error instanceof Yup.ValidationError) {
			return transformYupErrors(error.inner);
		}
		return {
			ok: false,
			message: error?.message || "Something went wrong",
			errors: null,
		};
	}
};

export const deleteProductAction = async (id) => {
	try {
		if (!id) {
			throw new Error("ID is required");
		}
		const res = await fetch(`https://66c395ffd057009ee9c0b957.mockapi.io/products/${id}`, {
			method: "DELETE",
		});

		const data = await res.json();

		if (!res.ok) throw new Error(data.message);

		revalidatePath("/dashboard/products");
		revalidatePath("/products");

		return {
			ok: true,
			message: "Product deleted successfully",
			errors: null,
		};
	} catch (error) {
		return {
			ok: false,
			message: error?.message || "Something went wrong",
			errors: null,
		};
	}
};

export const updateProductAction = async (prevState, formData) => {
	const fields = Object.fromEntries(formData);

	try {
		FormSchema.validateSync(fields, { abortEarly: false });
		const res = await fetch(`https://66c395ffd057009ee9c0b957.mockapi.io/products/${fields.id}`, {
			method: "PUT",
			body: JSON.stringify(fields),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();

		if (!res.ok) throw new Error(data.message);

		revalidatePath("/dashboard/products");
		revalidatePath(`/dashboard/products/${fields.id}`);
		revalidatePath("/products");
		revalidatePath(`/products/${fields.id}`);
		

		return {
			ok: true,
			message: "Product updated successfully",
			errors: null,
		};
	} catch (error) {
		if (error instanceof Yup.ValidationError) {
			return transformYupErrors(error.inner);
		}
		return {
			ok: false,
			message: error?.message || "Something went wrong",
			errors: null,
		};
	}
};
