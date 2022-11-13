import Head from "next/head";
import { NextSeo } from "next-seo";

import { getTemplate } from "../lib/templates";

import ShowCase from "../components/ShowCase";

export default function Home({ templates }) {
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
            <nav>
              <ul>
                <li className="flex items-center gap-4">
                  <span className="h-6 font-semibold text-gray-700 sm:text-2xl md:text-3xl">
                    🪁 templates.tw
                  </span>
                </li>
              </ul>
            </nav>
            <section className="flex-grow pl-10 text-base">
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
            <div>
              <a href="https://github.com/juhanakristian/tailwind-landing-pages">
                <img src="/images/github.png" height={24} width={24} />
              </a>
            </div>
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
