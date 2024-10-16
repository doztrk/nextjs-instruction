"use server";

import { signIn } from "@/auth";
import { transformYupErrors } from "@/helpers/form-validation";
import { AuthError } from "next-auth";
import * as Yup from "yup";

const FormSchema = Yup.object({
	username: Yup.string().required("Username is required"),
	password: Yup.string().required("Password is required"),
});
export const signInWithSocialAction = async (provider) => {
	try {
		await signIn(provider);
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const singInWithCredintialsAction = async (prevState, formData) => {
	const credentials = Object.fromEntries(formData);

	try {
		FormSchema.validateSync(credentials, { abortEarly: false });
		await signIn("credentials", credentials);
	} catch (error) {
		if (error instanceof Yup.ValidationError) {
			return transformYupErrors(error.inner);
		} else if (error instanceof AuthError) {
			return {
				ok: false,
				message: error.message,
				errors: null,
			};
		}
		throw error;
	}
};
