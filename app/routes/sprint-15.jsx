import Title from "../components/Title";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from "../models/contentful.server";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

export async function loader() {
    return json(await client.getPage("Sprint-15"))
}

export const meta = ({ data }) => {
  const { seoMetadata } = data;
  
  return [
    { title: seoMetadata.title },
    { name: "description", content: seoMetadata.description },
  ];
};

export const richTextRenderOptions = {
	renderNode: {
		[INLINES.HYPERLINK]: (node, children) => {
			const { data } = node;
			const { uri } = data;
			return (
				<a
					className="text-primary underline dark:text-secondary"
					target="_blank"
					rel="noopener noreferrer"
					href={uri}
				>
					{children[0]}
				</a>
			);
		},
		[BLOCKS.PARAGRAPH]: (node, children) => {
			return <p className="mb-4">{children}</p>;
		},
		[BLOCKS.HEADING_2]: (node, children) => {
			return <h2 className="mt-6 mb-4 text-xl font-bold">{children}</h2>;
		},
		[BLOCKS.HEADING_3]: (node, children) => {
			return <h3 className="mt-4 mb-3 text-lg font-semibold">{children}</h3>;
		},
		[BLOCKS.UL_LIST]: (node, children) => {
			return <ul className="list-disc">{children}</ul>;
		},
		[BLOCKS.OL_LIST]: (node, children) => {
			return <ol className="list-decimal">{children}</ol>;
		},
		[BLOCKS.LIST_ITEM]: (node, children) => {
			return <li className="mb-2">{children}</li>;
		},
		[BLOCKS.HR]: () => <hr className="my-4" />,
	},
};


export default function About() {
  const {description } = useLoaderData();
    return (
      <section className="px-8 sm:px-0 sm:max-w-2xl mx-auto">
        <Title title="Sprint-15" emoji="🙋‍♂️" />
        <article className="mt-4 text-lg">
        {documentToReactComponents(description.json,richTextRenderOptions)}
        </article>
      </section>
    )
}