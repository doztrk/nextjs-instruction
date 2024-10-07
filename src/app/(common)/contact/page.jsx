import { wait } from "@/helpers/functions";
import React from "react";

const Page = async () => {
	await wait(2000);

	return <div>Contact Page</div>;
};

export default Page;
