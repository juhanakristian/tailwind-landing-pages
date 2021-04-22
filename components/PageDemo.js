import * as React from "react";

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

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

export default function PageDemo({ url, html }) {
  const [showCode, setShowCode] = React.useState(false);

  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div
      style={{ maxWidth: "85rem", height: "60rem" }}
      className="py-20 mx-auto sm:px-6 lg:px-8"
    >
      <div className="flex justify-end w-full pb-4">
        <CodeToggle on={!showCode} onClick={() => setShowCode(!showCode)} />
      </div>
      <div className="h-full border-2 border-gray-100 rounded-lg shadow-sm">
        <div
          className="h-full"
          style={{ display: !showCode ? "none" : "block" }}
        >
          <pre className="h-full m-0 language-html">{html}</pre>
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
