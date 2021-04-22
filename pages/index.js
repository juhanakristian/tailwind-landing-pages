import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Resizable } from "re-resizable";

import PageDemo from "../components/PageDemo";

export default function Home() {
  return (
    <div className="pt-12">
      <PageDemo url="/templates/01-simple-saas" />
    </div>
  );
}
