import { Pageheader } from "@/components/page-header";
import Redirect from "@/components/redirect";
import React from "react";


export const metadata = {
	title: "Login",
	description: "Cheap electronic devices",
};

const Page = () => {
	return (
		<>
			<Pageheader title="Login" />
			<Redirect />
		</>
	);
};

export default Page;
