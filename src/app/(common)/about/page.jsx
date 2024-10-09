import { Client } from "@/components/client";
import { Pageheader } from "@/components/page-header";
import { Server } from "@/components/server";
import Link from "next/link";
import React from "react";

export const metadata = {
	title: "About Us",
	description: "Cheap electronic devices",
};

const Page = () => {
	return (
		<>
			<Pageheader title="About Us" />
			<p></p>

			<p></p>
			<Client>
				<Server />
			</Client>
		</>
	);
};

export default Page;
