import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Resizable } from "re-resizable";

import { getTemplate } from "../lib/templates";

import ShowCase from "../components/ShowCase";

export default function Home({ templates }) {
  return (
    <main className="p-12 mx-auto">
      <section className="pb-20 mx-auto max-w-7xl">
        <h1 className="pb-5 text-5xl font-bold">Landing Templates</h1>
        <h2 className="text-xl text-gray-700">
          Simple landing page templates for your next product
        </h2>
      </section>
      <div>
        {templates.map((t) => (
          <ShowCase url={t.url} html={t.html} />
        ))}
      </div>
      <div className="absolute top-4 right-4">
        <ul className="flex flex-col items-end">
          <li>
            <a href="https://twitter.com/juhanakristian">@juhanakristian</a>
          </li>
          <li>
            <a href="https://juhanajauhiainen.com">juhanajauhiainen.com</a>
          </li>
        </ul>
      </div>
    </main>
  );
}

export async function getStaticProps(context) {
  const template = getTemplate("01-simple-saas");
  return {
    props: {
      templates: [
        {
          url: "/templates/01-simple-saas",
          html: template,
        },
      ],
    },
  };
}
