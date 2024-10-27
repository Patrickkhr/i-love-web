import Title from "../components/Title";
import { client } from "../models/contentful.server";
import { data, json } from "@remix-run/node";

export async function loader(){
	return json(await client.getPage("Learning"))
}

export default function learning() {
  return (
	<section className="px-8 sm:px-0 sm:max-w-2xl mx-auto">
		<Title title="Learning Journal" emoji="🙋‍♂️" />
		<article className="mt-8 grid gap-6 sm:grid-cols-1">
			<a href="/sprint-13" className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
				<h2 className="text-2xl font-bold text-gray-800">Sprint 13</h2>
				<p className="mt-2 text-sm text-gray-600">2sept/21sept</p>
				<p className="mt-4 text-gray-700">#We love web #Svelte #MoSCoW</p>
			</a>
			<a href="/sprint-14" className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
				<h2 className="text-2xl font-bold text-gray-800">Sprint 14</h2>
				<p className="mt-2 text-sm text-gray-600">23sept/11okt</p>
				<p className="mt-4 text-gray-700">#We love web #CMS #Atomic</p>
			</a>
			<a href="/sprint-15" className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
				<h2 className="text-2xl font-bold text-gray-800">Sprint 15</h2>
				<p className="mt-2 text-sm text-gray-600">14sept/25okt</p>
				<p className="mt-4 text-gray-700">#We love web #Talks #Remix</p>
			</a>
		</article>
	</section>
  );
}