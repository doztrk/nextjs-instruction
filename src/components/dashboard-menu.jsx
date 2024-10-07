"use client";
import { Nav, Offcanvas } from "react-bootstrap";
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import menuItems from "@/helpers/data/dashboard-menu.json";
import Link from "next/link";
import { TfiShoppingCart } from "react-icons/tfi";
import { usePathname } from "next/navigation";

export const DashboardMenu = () => {
	const pathname = usePathname();

	return (
		<Navbar expand="lg" className="bg-info mb-3">
			<Container fluid>
				<Navbar.Brand href="#">Dashboard</Navbar.Brand>
				<Navbar.Toggle aria-controls="dashboard-menu" />
				<Navbar.Offcanvas id="dashboard-menu" aria-labelledby="dashboard-menu-label" placement="end">
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id="dashboard-menu-label">Dashboard</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							{menuItems.map((item) => (
								<Nav.Link href={item.url} prefetch={item.prefetch} key={item.id} as={Link}>
									{item.title}
								</Nav.Link>
							))}

							{pathname.startsWith("/dashboard/products") && (
								<Nav.Link>
									<TfiShoppingCart />
								</Nav.Link>
							)}
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};
