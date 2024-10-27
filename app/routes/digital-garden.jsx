import Title from "../components/Title";
import { json } from "@remix-run/node";
import { client } from "../models/contentful.server";

export async function loader() {
    return json(await client.getPage("Sprint-14"))
}

export const meta = ({ data }) => {
  const { seoMetadata } = data;
  
  return [
    { title: seoMetadata.title },
    { name: "description", content: seoMetadata.description },
  ];
};

export default function DigitalGarden() {
    return (
      <section className="px-8 sm:px-0 sm:max-w-2xl mx-auto">
        <Title title="Digital Garden" emoji="🙋‍♂️" />
        <article className="mt-4 text-lg">
          <h2>test</h2>
          <p>tests</p>
        </article>
      </section>
    )
}