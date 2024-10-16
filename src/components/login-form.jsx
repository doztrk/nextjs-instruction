"use client";
import { signInWithSocialAction, singInWithCredintialsAction } from "@/actions/auth-actions";
import React from "react";
import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { TfiGithub, TfiGoogle } from "react-icons/tfi";
import { useFormState } from "react-dom";

export const LoginForm = () => {
	const initialState = { ok: false, message: "", errors: null };

	const [state, dispatch] = useFormState(singInWithCredintialsAction, initialState);
	return (
		<Row className="my-5">
			<Col sm={9} md={7} lg={5} className="mx-auto">
				<Card>
					<Card.Body>
						<Card.Title>Login</Card.Title>
						<Form action={dispatch}>
							<FloatingLabel controlId="username" label="Username" className="mb-3">
								<Form.Control
									type="text"
									placeholder="Username"
									name="username"
									isInvalid={!!state?.errors?.username}
									defaultValue={"emilys"}
								/>
								<Form.Control.Feedback type="invalid">{state?.errors?.username}</Form.Control.Feedback>
							</FloatingLabel>

							<FloatingLabel controlId="password" label="Password" className="mb-3">
								<Form.Control
									type="password"
									placeholder="Password"
									name="password"
									isInvalid={!!state?.errors?.password}
									defaultValue={"emilyspass"}
								/>
								<Form.Control.Feedback type="invalid">{state?.errors?.password}</Form.Control.Feedback>
							</FloatingLabel>

							<Button variant="warning" type="submit" className="w-100 text-uppercase">
								Login
							</Button>
						</Form>

						<hr className="my-5" />
						<div className="d-flex justify-content-center gap-3">
							<Button variant="secondary" size="lg" onClick={() => signInWithSocialAction("github")}>
								<TfiGithub />
							</Button>
							<Button variant="secondary" size="lg" onClick={() => signInWithSocialAction("google")}>
								<TfiGoogle />
							</Button>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};
