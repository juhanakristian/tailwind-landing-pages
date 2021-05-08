import * as React from "react";

import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import Highlight, { defaultProps } from "prism-react-renderer";
import nightOwl from "prism-react-renderer/themes/nightOwl";

function CodeToggle({ on, onClick }) {
  const text = on ? "</> Code" : "Preview";
  return (
    <button
      className="p-4 pt-1.5 pb-1 text-sm text-gray-500 bg-gray-100 rounded-md"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default function ShowCase({ url, html }) {
  const [showCode, setShowCode] = React.useState(false);

  React.useLayoutEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div
      style={{ maxWidth: "85rem", height: showCode ? "auto" : "60rem" }}
      className="py-20 mx-auto sm:px-6 lg:px-8"
    >
      <div className="flex justify-end w-full pb-4">
        <CodeToggle on={!showCode} onClick={() => setShowCode(!showCode)} />
      </div>
      <div className="h-full border-2 border-gray-100 rounded-lg shadow-lg">
        <div
          className="h-full"
          style={{ display: !showCode ? "none" : "block" }}
        >
          {/* <pre className="h-full m-0 rounded-lg" style={{ margin: 0 }}>
            <code className="m-0 language-html">{html}</code>
          </pre> */}
          <Highlight
            {...defaultProps}
            code={html}
            language="html"
            theme={nightOwl}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={{ ...style, margin: 0 }}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
        <iframe
          style={{ display: showCode ? "none" : "block" }}
          className="w-full h-full "
          src={url}
        ></iframe>
      </div>
    </div>
  );
}
