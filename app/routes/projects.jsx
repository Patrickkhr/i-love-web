import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Title from "../components/Title";
import { client } from "../models/contentful.server";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export async function loader() {
	const projects = await client.getProjects();
	const page = await client.getPage("Projects")
	return json({projects, page});
}

export const meta = ({ data }) => {
	const { title, description, ogImage } = data.page.seoMetadata;
	return [
		{ title },
		{ name: "description", content: description },
		{ property: "og:image", content: ogImage.url }
	];
};

export default function Projects() {
  const {projects} = useLoaderData();
  return (
		<section className="px-4 sm:px-48">
			<Title title="Projects" emoji="💻" />
			<article className="grid gap-6 sm:grid-cols-3">
				{projects.map((item) => {
					const { link, sys, description, title, previewImage } = item;
					return (
						<a href={link} key={sys.id} className="shadow-lg hover:shadow-xl transition-shadow duration-200">
							<img src={previewImage.url} alt={previewImage.description} className="w-full" />
							<section className="px-6 py-4">
								<h2 className="font-semibold text-lg mb-2 dark:text-secondary">
									{title}
								</h2>
								<p>{documentToReactComponents(description.json)}</p>
							</section>
						</a>
					);
				})}
			</article>
		</section>
  )
}