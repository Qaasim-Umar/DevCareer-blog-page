import Head from "next/head";
import styles from "../styles/Home.module.css";
import CardComponent from "../components/CardComponent";
import { attributes, react as HomeContent } from "../content/home.md";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories/Index";
import Article from "./article";
import Search from "components/Search/search";
import Index from "../components/Categories/Index";

export default function Home() {
  let { posts } = attributes;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <div>
        <Navbar />
        <Categories />
        <Search/>
        <CardComponent />
        <Article/>
      </div>
    </div>
  );
}
