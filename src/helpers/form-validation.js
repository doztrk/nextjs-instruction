export const transformYupErrors = (errors) => {
	const errObject = {};
	errors.forEach((item) => {
		errObject[item.path] = item.message;
	});
	return {
		ok: false,
		message: "Validation error",
		errors: errObject,
	};
};
