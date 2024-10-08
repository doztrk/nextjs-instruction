"use client";
import React from "react";
import { Carousel } from "react-bootstrap";
import slides from "@/helpers/data/slider.json";
import Image from "next/image";

export const Slider = () => {
	return (
		<Carousel>
			{slides.map((item) => (
				<Carousel.Item key={item.id} style={{ height: "50vh" }}>
					<Image src={`/images/${item.image}`} alt={item.image} fill style={{ objectFit: "cover" }} />
				</Carousel.Item>
			))}
		</Carousel>
	);
};
