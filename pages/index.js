import Head from "next/head";
import { NextSeo } from "next-seo";

import { getTemplate } from "../lib/templates";

import ShowCase from "../components/ShowCase";
import Profile from "../components/Profile";

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
        className="pt-5 pl-12 pr-12"
        style={{
          backgroundImage: "linear-gradient(40deg, #FCF0FD, #E1E4FB)",
        }}
      >
        <section className="max-w-6xl mx-auto">
          <div>
            <nav>
              <ul>
                <li className="flex items-center gap-4">
                  <img src="/icons/templates.svg" height={32} width={32} />
                  <span className="h-6 text-xl font-bold">templates.tw</span>
                </li>
              </ul>
            </nav>
          </div>
          <div className="pt-4 sm:pt-0 sm:absolute sm:top-4 sm:right-4">
            <Profile />
          </div>
          <div className="items-center pt-20 pb-40 text-center ">
            <h2 className="text-5xl leading-snug text-gray-700">
              Tailwind CSS templates <br />
              you can just
              <span className="font-semibold"> copy and paste</span>
            </h2>
          </div>
        </section>
        <section className="p-10 pt-10 text-lg text-gray-700">
          <div className="flex flex-wrap justify-between max-w-6xl gap-10 mx-auto">
            <div className="flex gap-4">
              <img src="/icons/responsive.svg" height={24} width={24} />
              <span>Responsive</span>
            </div>
            <div className="flex gap-4">
              <img src="/icons/dependency.svg" height={24} width={24} />
              <span>No dependencies</span>
            </div>
            <div className="flex gap-4">
              <img src="/icons/opensource.svg" height={24} width={24} />
              <span>Open Source</span>
            </div>
            <div className="flex gap-4">
              <img src="/icons/customize.svg" height={24} width={24} />
              <span>Easy to customize</span>
            </div>
          </div>
        </section>
      </header>
      <section className="p-10 pt-20 text-lg">
        <div className="max-w-6xl mx-auto leading-relaxed">
          <p className="pb-4">
            Tailwind CSS is great for rapidly building websites by allowing you
            to write your styles right into your HTML. This makes it possible to
            share HTML templates which contain the styles.
          </p>
          <p className="pb-4">
            These templates use the default Tailwind CSS configuration so you
            can just copy paste them into your project and start editing.
          </p>
          <p className="pb-4">
            All templates are open source and licensed with MIT license.
          </p>
          <div className="flex pt-2">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=juhanakristian&repo=tailwind-landing-pages&type=star&count=true&size=small"
              frameBorder="0"
              scrolling="0"
              width="90"
              height="30"
              title="GitHub"
            ></iframe>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=juhanakristian&repo=tailwind-landing-pages&type=watch&count=true&v=2"
              frameBorder="0"
              scrolling="0"
              width="100"
              height="20"
              title="GitHub"
            ></iframe>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=juhanakristian&repo=tailwind-landing-pages&type=fork&count=true&size=small"
              frameBorder="0"
              scrolling="0"
              width="90"
              height="30"
              title="GitHub"
            ></iframe>
          </div>
        </div>
      </section>
      <main className="p-4 mx-auto md:p-12">
        <div>
          {templates.map((t, i) => (
            <div className="pb-12" key={i}>
              <ShowCase url={t.url} html={t.html} />
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
