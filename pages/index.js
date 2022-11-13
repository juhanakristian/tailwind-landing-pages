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
        className="p-5 pt-5 "
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
            {/* <section className="flex-grow pl-10 text-base">
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
            </section> */}
            <div className="ml-auto">
              <a href="https://github.com/juhanakristian/tailwind-landing-pages">
                <img src="/images/github.png" height={24} width={24} />
              </a>
            </div>
          </div>
          <section className="flex-grow text-base">
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
          <div className="flex flex-col-reverse items-center justify-center pt-10 lg:flex-row lg:items-start">
            <div>
              <div className="flex flex-col gap-2 pt-20 pb-32">
                <h2 className="text-xl font-bold text-purple-600">
                  Templates and components for your next project
                </h2>
                <h1 className="text-5xl leading-snug text-gray-900">
                  Tailwind CSS templates <br />
                  you can just
                  <span className="font-semibold"> copy and paste</span>
                </h1>
              </div>
            </div>
            <img
              className="object-contain md:pl-10 lg:max-w-xl"
              src="/images/hero.png"
            />
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 py-20 text-gray-600 md:grid-cols-3">
            <section className="flex flex-col items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#9584FF"
                  d="M19 2c0-1.104-.896-2-2-2h-10c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-20zm-8.5 0h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm1.5 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-14.024h10v14.024z"
                />
              </svg>
              <h5 className="font-semibold">Responsive</h5>
              <p className="text-center">
                All templates are responsive and work on all devices. All
                templates are responsive and work on all devices.
              </p>
            </section>
            <section className="flex flex-col items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#9584FF"
                  d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"
                />
              </svg>
              <h5 className="font-semibold">Open Source</h5>
              <p className="text-center">
                All templates are responsive and work on all devices. All
                templates are responsive and work on all devices.
              </p>
            </section>
            <section className="flex flex-col items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#9584FF"
                  d="M0 21.398c5.504.456 3.533-5.392 8.626-5.445l2.206 1.841c.549 6.645-7.579 8.127-10.832 3.604zm16.878-8.538c1.713-2.687 7.016-11.698 7.016-11.698.423-.747-.515-1.528-1.17-.976 0 0-7.887 6.857-10.213 9.03-1.838 1.719-1.846 2.504-2.441 5.336l2.016 1.681c2.67-1.098 3.439-1.248 4.792-3.373z"
                />
              </svg>
              <h5 className="font-semibold">Easy to customize</h5>
              <p className="text-center">
                All templates are responsive and work on all devices. All
                templates are responsive and work on all devices.
              </p>
            </section>
          </div>
        </section>
      </header>
      {/* <section className="p-10 pt-20 text-base text-gray-700">
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
        </div>
      </section> */}
      <main className="mx-auto max-w-6xl p-4 md:p-12">
        <h2 className="pb-2 text-2xl">Full page templates</h2>
        <div>
          {templates.map((t, i) => (
            <div className="pb-12" key={i}>
              <ShowCase url={t.url} html={t.html} height="46rem" />
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
