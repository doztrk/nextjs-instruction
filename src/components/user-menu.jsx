import { auth } from "@/auth";
import Link from "next/link";
import React from "react";

export const UserMenu = async () => {
	const session = await auth();

	return (
		<div className="text-light">
			{!!session ? (
				<>
					<Link href={"/dashboard"}>Dashboard</Link>	|{" "}
                    <Link href={"/api/auth/signout"}>Logout</Link>
				</>
			) : (
				<Link href={"/api/auth/signin"}>Login</Link>
			)}
		</div>
	);
};
