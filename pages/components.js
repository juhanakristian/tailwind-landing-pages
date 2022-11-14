import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

import { getTemplate } from "../lib/templates";

import ShowCase from "../components/ShowCase";

export default function Home({ templates }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <Head>
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </Head>
      <NextSeo
        title="templates.tw"
        description="Tailwind CSS templates you can just copy and paste"
        canonical="https://templates.tw"
        openGraph={{
          url: "https://templates.tw",
          title: "templates.tw",
          description: "Tailwind CSS templates you can just copy and paste",
          images: [
            {
              url: "https://templates.tw/images/og-image.png",
              width: 1200,
              height: 630,
              alt: "templates.tw",
              type: "image/png",
            },
          ],
          site_name: "templates.tw",
        }}
      />
      <header
        className="p-5 pt-5"
        // style={{
        //   backgroundImage:
        //     "linear-gradient(47deg, #FCF0FD 0 16%, #cec6ff 30% 80%, #FFE8D3 89% 100%, #E1E4FB 90% 100%)",
        // }}
      >
        <section>
          <div className="mx-auto flex max-w-6xl items-baseline">
            <span className=" whitespace-nowrap text-3xl font-semibold text-gray-700">
              🪁 templates.tw
            </span>
            <section className="invisible flex-grow pl-10 text-base md:visible">
              <nav className="mx-auto max-w-6xl">
                <ul className="flex items-center justify-start gap-8">
                  <li>
                    <a href="/">Templates</a>
                  </li>
                  <li>
                    <a href="/components">Components</a>
                  </li>
                </ul>
              </nav>
            </section>
            <div className="ml-auto">
              <a href="https://github.com/juhanakristian/tailwind-landing-pages">
                <img src="/images/github.png" height={24} width={24} />
              </a>
            </div>
            <div
              id="menubutton"
              class="cursor-pointer pl-4 md:invisible md:absolute"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
              </svg>
            </div>
            {menuOpen && (
              <nav
                id="menu"
                class="absolute top-0 left-0 z-50 flex w-full flex-col bg-white text-lg shadow-lg md:invisible"
              >
                <div className="flex justify-between border-b-2 border-gray-100 px-2 py-4">
                  <span className=" whitespace-nowrap text-xl font-semibold text-gray-700">
                    🪁 templates.tw
                  </span>
                  <div
                    className="cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <svg
                      clipRule="evenodd"
                      fillRule="evenodd"
                      strokeLinejoin="round"
                      strokeMiterlimit="2"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                    </svg>
                  </div>
                </div>
                <div className="border-b-2 border-gray-100 py-4">
                  <a href="/" class="px-4 font-medium hover:text-gray-900">
                    Templates
                  </a>
                </div>
                <div className="border-b-2 border-gray-100 py-4">
                  <a
                    href="/components"
                    class="px-4 font-medium hover:text-gray-900"
                  >
                    Elements
                  </a>
                </div>
              </nav>
            )}
          </div>
        </section>
      </header>
      <main className="mx-auto p-4 md:p-12">
        <div>
          {templates.map((t, i) => (
            <div className="pb-12" key={i}>
              <ShowCase title={t.title} html={t.html} resizeDisabled={true} />
            </div>
          ))}
        </div>
      </main>
      <footer className="p-10"></footer>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      templates: [
        {
          title: "Buttons",
          html: getTemplate("elements/buttons"),
        },
        {
          title: "Inputs",
          html: getTemplate("elements/inputs"),
        },
      ],
    },
  };
}
