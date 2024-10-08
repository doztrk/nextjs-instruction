"use client";
import { Button } from "react-bootstrap";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import iwatch from "../../public/images/iwatch.png";

const Redirect = () => {
	const router = useRouter();

	const handleClick = () => {
		const res = confirm("Are you sure?");
		if (!res) return;

		router.replace("/dashboard");
	};
	return (
		<div>
			<Image src="/images/landscape.jpg" width="500" height="500" alt="landscape" />
			<Image src={iwatch} width="500" height="500" alt="iwatch" />

			<div style={{ height: "400px", position: "relative" }}>
				<Image
					src="https://plus.unsplash.com/premium_photo-1673491311248-6f5aac101d4a?q=80&w=3098&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					fill
					alt="landscape"
					style={{ objectFit: "cover" }}
				/>
			</div>

			<Button onClick={handleClick}>Redirect</Button>
		</div>
	);
};

export default Redirect;
