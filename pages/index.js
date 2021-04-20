import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="pt-12">
      <div
        style={{ maxWidth: "85rem", height: "40rem" }}
        className="py-20 mx-auto sm:px-6 lg:px-8"
      >
        <div className="flex justify-end w-full pb-4">
          <button className="p-4 pt-1.5 pb-1 text-sm text-gray-500 bg-gray-100 rounded-md">
            &lt;/&gt; Code
          </button>
        </div>
        <iframe
          className="w-full h-full border-2 border-gray-100 rounded-lg shadow-sm"
          src="/templates/01-simple-saas"
        ></iframe>
      </div>
    </div>
  );
}
