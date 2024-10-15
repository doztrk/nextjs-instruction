"use client";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import menuItems from "@/helpers/data/main-menu.json";
import Image from "next/image";
import { UserMenu } from "./user-menu";

export const Header = ({ children }) => {
	return (
		<Navbar expand="lg" className="bg-dark" data-bs-theme="dark" collapseOnSelect>
			<Container>
				<Navbar.Brand href="/" as={Link}>
					<Image src="/images/logo.png" alt="logo" width={250} height={40} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						{menuItems.map((item) => (
							<Nav.Link key={item.id} href={item.url} as={Link} prefetch={item.prefetch}>
								{item.title}
							</Nav.Link>
						))}
					</Nav>

					{children}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
