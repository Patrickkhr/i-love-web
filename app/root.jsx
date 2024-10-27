import { redirect } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import NavBar from './components/NavBar'

import styles from "./styles/tailwind.css";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  if (url.pathname === '/') {
    return redirect('/index');
  }
  return null;
};

export const meta = () => [
  { charset: "utf-8" },
  { title: "Patrick's Portfolio" },
  { name: "description", content: "Portfolio van Patrick Hordijk" },
  { name: "viewport", content: "width=device-width,initial-scale=1" }
];


export const links = () => [
  {rel: "stylesheet", href: styles}
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <meta charset="UTF-8"></meta>
        <Links />
      </head>
      <body>
        <NavBar />
        <main className="container mx-auto pt-8 sm:pt-16">
          <Outlet />
        </main>
        
<footer className="fixed bottom-0 w-screen p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Gemaakt door <a href="https://github.com/patrickkhr" className="hover:underline">Patrick Hordijk</a>
    </div>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <a href="https://www.linkedIn.com" className="mr-4 hover:underline md:mr-6 ">LinkedIn</a>
      </li>
      <li>
        <a href="https://github.com/patrickkhr" className="mr-4 hover:underline md:mr-6">GitHub</a>
      </li>
    </ul>
</footer>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
