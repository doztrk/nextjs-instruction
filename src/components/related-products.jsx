"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "./product-card";
import "swiper/css";

export const RelatedProducts = ({ relatedProducts }) => {
	return (
		<div>
			<Swiper
				spaceBetween={50}
				slidesPerView={3}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{relatedProducts.map((item) => (
					<SwiperSlide key={item.id}>
						<ProductCard {...item} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
