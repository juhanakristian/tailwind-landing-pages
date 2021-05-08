import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Resizable } from "re-resizable";

import { getTemplate } from "../lib/templates";

import ShowCase from "../components/ShowCase";

export default function Home({ templates }) {
  return (
    <div className="pt-12">
      {templates.map((t) => (
        <ShowCase url={t.url} html={t.html} />
      ))}
    </div>
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
