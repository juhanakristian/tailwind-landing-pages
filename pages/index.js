import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { getTemplate } from "../lib/templates";

import ShowCase from "../components/ShowCase";
import Profile from "../components/Profile";
// import { Globe, Twitter } from "../components/icons";

export default function Home({ templates }) {
  return (
    <>
      <header
        className="pt-5 pl-12 pr-12"
        style={{
          backgroundImage:
            "linear-gradient(40deg, rgba(225, 228, 251, 1), rgba(252, 240, 253, 1))",
        }}
      >
        <section className="max-w-6xl mx-auto">
          <div>
            <nav>
              <ul>
                <li className="flex items-center gap-4">
                  <Image src="/icons/templates.svg" height={24} width={24} />
                  <span className="h-6 text-lg font-bold">templates.tw</span>
                </li>
              </ul>
            </nav>
          </div>
          <div className="items-center pt-20 pb-40 text-center ">
            <h2 className="text-5xl leading-snug text-gray-700">
              Tailwind templates <br />
              you can just
              <span className="font-semibold"> copy and paste</span>
            </h2>
          </div>
        </section>
        <div className="absolute hidden top-4 right-4 md:block">
          <Profile />
        </div>
        <section className="p-10 pt-10 text-xl">
          <div className="flex flex-wrap justify-between max-w-6xl gap-10 mx-auto">
            <div className="flex gap-4">
              <Image src="/icons/twitter.svg" height={32} width={32} />
              <span>Responsive</span>
            </div>
            <div className="flex gap-4">
              <Image src="/icons/twitter.svg" height={32} width={32} />
              <span>No dependencies</span>
            </div>
            <div className="flex gap-4">
              <Image src="/icons/twitter.svg" height={32} width={32} />
              <span>Open Source</span>
            </div>
            <div className="flex gap-4">
              <Image src="/icons/twitter.svg" height={32} width={32} />
              <span>Easy to customize</span>
            </div>
          </div>
        </section>
      </header>
      <section className="p-10 pt-20 text-xl">
        <div className="max-w-6xl mx-auto">
          <p className="pb-10 leading-relaxed">
            Tailwind CSS is great for rapid development of frontend. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Proin lorem mi,
            hendrerit eu congue sit amet, facilisis ac lectus. Ut tempor massa
            in justo mollis gravida. Nulla dapibus magna ex, ut sodales ipsum
            bibendum nec. Maecenas non ex nisl.
          </p>
          <p>All templates are free and licensed with MIT license.</p>
        </div>
      </section>
      <main className="p-12 mx-auto">
        <div>
          {templates.map((t, i) => (
            <div className="pb-12" key={i}>
              <ShowCase url={t.url} html={t.html} />
            </div>
          ))}
        </div>
      </main>
      <footer className="p-10">
        <div className="max-w-6xl m-auto">
          <div className="sm:hidden">
            <Profile />
          </div>
        </div>
      </footer>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      templates: [
        {
          url: "/templates/01-simple-saas",
          html: getTemplate("01-simple-saas"),
        },
        {
          url: "/templates/02-book",
          html: getTemplate("02-book"),
        },
        {
          url: "/templates/03-newsletter",
          html: getTemplate("03-newsletter"),
        },
      ],
    },
  };
}
