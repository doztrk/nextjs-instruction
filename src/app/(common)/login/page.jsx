import { Pageheader } from "@/components/page-header";
import Redirect from "@/components/redirect";
import React from "react";

const Page = () => {
	return (
		<>
			<Pageheader title="Login" />
			<Redirect />
		</>
	);
};

export default Page;
