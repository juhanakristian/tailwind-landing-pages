import * as React from "react";

import { templatesFilePaths, getTemplate } from "../../lib/templates";

export default function Template({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}

export async function getStaticProps({ params: { template } }) {
  const html = getTemplate(template);
  return {
    props: {
      html,
    },
  };
}
export async function getStaticPaths() {
  const paths = templatesFilePaths
    .map((path) => path.replace(/\.html$/, ""))
    .map((template) => ({ params: { template } }));

  return {
    paths,
    fallback: false,
  };
}
