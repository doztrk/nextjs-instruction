"use client";

import React from "react";
import { Server } from "./server";

export const Client = ({children}) => {
	console.log("CLIENT COMPONENT");
	return (
		<div>
			<p>This is a client component</p>
			<button onClick={() => console.log("Hello World")}>Click client button</button>
            {children}
		</div>
	);
};
