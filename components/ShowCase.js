import * as React from "react";

import Highlight, { defaultProps } from "prism-react-renderer";
import nightOwl from "prism-react-renderer/themes/nightOwl";

import { useResizeHandle } from "useresizehandle";

function useBreakpoints(config) {
  const [width, setWidth] = React.useState();

  const breakpoints = { sm: 768, md: 1024, lg: 1280, ...config };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize(event) {
        setWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);

      return () => document.removeEventListener("resize", handleResize);
    }
  }, []);

  if (width < breakpoints.sm) return "sm";
  if (width < breakpoints.md) return "md";
  if (width < breakpoints.lg) return "lg";
  return "xl";
}

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

function OpenLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#8e8e8e"
    >
      <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
    </svg>
  );
}

function HandleIcon() {
  return (
    <svg width={10} height={15}>
      <line
        x1={5}
        y1={0}
        x2={5}
        y2={15}
        style={{
          stroke: "#ccc",
          strokeWidth: 2,
        }}
      />
      <line
        x1={9}
        y1={0}
        x2={9}
        y2={15}
        style={{
          stroke: "#ccc",
          strokeWidth: 2,
        }}
      />
    </svg>
  );
}

function CodeToggle({ on, onClick }) {
  const text = on ? "</> Code" : "Preview";
  return (
    <button
      className="p-4 pt-1.5 pb-1 text-sm text-gray-500 h-8 bg-gray-100 rounded-md"
      onClick={onClick}
      title={on ? "Switch to code" : "Switch to preview"}
    >
      {text}
    </button>
  );
}

export default function ShowCase({ url, html, resizeDisabled, height, title }) {
  const [showCode, setShowCode] = React.useState(false);
  const codeRef = React.useRef(null);

  const [resizing, setResizing] = React.useState(false);

  const breakpoint = useBreakpoints();

  const { containerProps, handleProps } = useResizeHandle({
    axis: "horizontal",
    onResizeStart: () => setResizing(true),
    onResizeEnd: () => setResizing(false),
  });

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
    <div className="mx-auto" style={{ maxWidth: "72rem" }}>
      <div className="flex w-full gap-2 pb-4">
        <h2 className="text-xl font-semibold flex-grow">{title}</h2>
        <CodeToggle on={!showCode} onClick={() => setShowCode(!showCode)} />
        <button
          className="flex items-center justify-center h-8 pl-2 pr-2 text-gray-300 bg-gray-100 rounded-md"
          onClick={handleCopy}
          title="Copy code to clipboard"
        >
          <CopyIcon />
        </button>
        {url && (
          <a
            className="flex items-center justify-center h-8 pl-2 pr-2 text-gray-300 bg-gray-100 rounded-md"
            target="_blank"
            rel=""
            href={url}
            title="Open in a new tab"
          >
            <OpenLinkIcon />
          </a>
        )}
      </div>
      <div style={{ height: showCode ? "auto" : height }}>
        <div className="h-full bg-gray-100 border-2 border-gray-100 rounded-lg shadow-md">
          <div style={{ display: !showCode ? "none" : "block" }}>
            {showCode && (
              <Highlight
                {...defaultProps}
                code={html}
                language="html"
                theme={nightOwl}
              >
                {({
                  className,
                  style,
                  tokens,
                  getLineProps,
                  getTokenProps,
                }) => (
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
            )}
          </div>
          <div
            {...containerProps}
            className="bg-white rounded-md"
            style={{
              ...containerProps.style,
              height: "100%",
              paddingRight: breakpoint !== "sm" ? 15 : 0,
              minWidth: 100,
              maxWidth: "100%",
            }}
          >
            {url ? (
              <iframe
                style={{
                  display: showCode ? "none" : "block",
                  pointerEvents: resizing ? "none" : "initial",
                }}
                className="w-full h-full"
                src={url}
              ></iframe>
            ) : (
              <div
                style={{
                  display: showCode ? "none" : "block",
                }}
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
            )}
            {breakpoint !== "sm" && !Boolean(resizeDisabled) && (
              <div
                {...handleProps}
                style={{ ...handleProps.style, top: "50%" }}
              >
                <div
                  className="w-10 m-w-10 flex"
                  style={{
                    width: 15,
                    height: 30,
                    cursor: "move",
                  }}
                >
                  <HandleIcon />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
