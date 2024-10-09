import { Pageheader } from "@/components/page-header";
import { wait } from "@/helpers/functions";
import React from "react";

const Page = async () => {
	await wait(2000);

	return (
		<>
			<Pageheader title="Contact Us" />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laudantium doloremque iusto cupiditate dolorum dolor recusandae
				eum, molestiae aspernatur, neque minima ipsa eius. Accusantium est, labore voluptatibus optio commodi inventore! Maxime nobis
				placeat voluptatibus doloremque odio at exercitationem provident et commodi distinctio quia explicabo laudantium quam consequatur
				impedit fugiat sunt, similique, odit culpa vitae vero quas, autem tenetur? Autem, eos. In vitae laborum vero fuga aliquam,
				cupiditate quidem sit a, quaerat officiis inventore laboriosam esse perspiciatis iusto hic architecto ratione quis beatae repellat
				cum qui! Exercitationem corrupti ut molestiae neque! Ipsa neque assumenda necessitatibus atque officiis veniam asperiores enim
				molestiae deleniti harum eum, accusamus mollitia totam modi doloremque illum, sapiente praesentium? Facere eaque fugiat labore
				pariatur deleniti. Temporibus, voluptatem fuga?
			</p>
		</>
	);
};

export default Page;
