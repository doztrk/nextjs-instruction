"use client";
import { Button } from "react-bootstrap";
import React from "react";
import { useRouter } from "next/navigation";

const Redirect = () => {
	const router = useRouter();

	const handleClick = () => {
		const res = confirm("Are you sure?");
		if (!res) return;

		router.replace("/dashboard");
	};
	return (
		<div>
			<Button onClick={handleClick}>Redirect</Button>
		</div>
	);
};

export default Redirect;
