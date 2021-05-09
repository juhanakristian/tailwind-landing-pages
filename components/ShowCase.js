import * as React from "react";

import Highlight, { defaultProps } from "prism-react-renderer";
import nightOwl from "prism-react-renderer/themes/nightOwl";

function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#8e8e8e"
    >
      <path d="M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm12.054-5.839l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201zm-6 8.92v3.955h-16v-18h4l2.102 2h3.898l2-2h4v1.911l2-2.024v-1.887h-3c-1.229 0-2.18-1.084-3-2h-8c-.82.916-1.771 2-3 2h-3v22h20v-7.98l-2 2.025zm-8-16.045c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" />
    </svg>
  );
}

function CodeToggle({ on, onClick }) {
  const text = on ? "</> Code" : "Preview";
  return (
    <button
      className="p-4 pt-1.5 pb-1 text-sm text-gray-500 h-8 bg-gray-100 rounded-md"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default function ShowCase({ url, html }) {
  const [showCode, setShowCode] = React.useState(false);
  const codeRef = React.useRef(null);

  function handleCopy() {
    if (!codeRef.current) return;

    const range = document.createRange();
    range.selectNode(codeRef.current);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  }

  return (
    <div
      style={{ maxWidth: "85rem", height: showCode ? "auto" : "60rem" }}
      className="py-20 mx-auto sm:px-6 lg:px-8"
    >
      <div className="flex justify-end w-full gap-2 pb-4">
        <CodeToggle on={!showCode} onClick={() => setShowCode(!showCode)} />
        <button
          className="flex items-center justify-center h-8 pl-2 pr-2 text-gray-300 bg-gray-100 rounded-md"
          onClick={handleCopy}
        >
          <CopyIcon />
        </button>
      </div>
      <div className="h-full border-2 border-gray-100 rounded-lg shadow-lg">
        <div
          className="h-full"
          style={{ display: !showCode ? "none" : "block" }}
        >
          <Highlight
            {...defaultProps}
            code={html}
            language="html"
            theme={nightOwl}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={className}
                style={{
                  ...style,
                  margin: 0,
                  paddingTop: 5,
                  paddingLeft: 10,
                  borderRadius: "8px",
                  overflow: "auto",
                }}
                ref={codeRef}
              >
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
