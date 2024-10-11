"use client";
import { Button } from "react-bootstrap";
import React from "react";
import { useRouter } from "next/navigation";

export const ButtonReturnBack = () => {
	const router = useRouter();

	return (
		<Button variant="secondary" className="mt-3" onClick={() => router.back()}>
			Return back
		</Button>
	);
};
