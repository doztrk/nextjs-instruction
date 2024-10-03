import Link from "next/link";
import React from "react";

export const DashboardMenu = () => {
	return (
		<div>
			<ul>
				<li>
					<Link href="/dashboard">Dashboard</Link>
				</li>
				<li>
					<Link href="/dashboard/products">Products</Link>
				</li>
				<li>
					<Link href="/dashboard/profile">Profile</Link>
				</li>
				<li>
					<Link href="/dashboard/logout">Logout</Link>
				</li>
			</ul>
		</div>
	);
};
