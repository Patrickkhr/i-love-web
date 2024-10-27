import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from "../models/contentful.server";
import {FaGithub, FaLinkedin, FaTwitter, FaTwitch, FaYoutube} from 'react-icons/fa';

export async function loader(){
	return json(await client.getPage("Patrick"))
}

export const meta = ({ data }) => {
  const { seoMetadata } = data;
  
  return [
    { title: seoMetadata.title },
    { name: "description", content: seoMetadata.description },
    { property: "og:image", content: seoMetadata.ogImage.url }
  ];
};

export default function Index() {
	const {title, linksCollection } = useLoaderData();
	const links ={} 
	linksCollection.items.forEach(link => {
		Object.assign(links,Object.fromEntries([Object.values(link)]))
	});
  return (
		<section className="text-center mt-24 sm:mt-24">
			<article>
				<h1 className="text-3xl sm:text-6xl">Hello{' '}
					<span role="img" aria-label="wave">👋</span>
					, I'm <span className="text-primary dark:text-secondary"> {title}</span>!
				</h1>
			</article>
			<div className="mt-8 sm:mt-16 flex justify-center sm:mx-64 mx-12 dark:text-secondary">
					<a href={links.GitHub} target="_blank" aria-label="GitHub"><FaGithub className="h-12 w-12 sm:h-16 sm:w-16 fill-current" /></a>
					<a href={links.LinkedIn} target="_blank" aria-label="LinkedIn"><FaLinkedin className="h-12 w-12 sm:h-16 sm:w-16 fill-current" /></a>
			</div>
		</section>
  );
}
