import { LoginForm } from "@/components/login-form";
import { Pageheader } from "@/components/page-header";
import React from "react";


export const metadata = {
	title: "Login",
	description: "Cheap electronic devices",
};

const Page = () => {
	return (
		<>
			<Pageheader title="Login" />
			<LoginForm/>
		</>
	);
};

export default Page;
