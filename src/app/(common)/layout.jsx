import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { UserMenu } from "@/components/user-menu";
import React from "react";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
	return (
		<>
			<Header>
				<UserMenu />
			</Header>
			<Container>{children}</Container>
			<Footer />
		</>
	);
};

export default Layout;
