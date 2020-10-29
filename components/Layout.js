import styles from "../styles/layout.module.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <Head></Head>
        <Nav />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
}
