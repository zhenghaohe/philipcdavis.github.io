import Nav from "./Nav";
import Footer from "./Footer";
import Head from "next/head";
import { Box } from "rebass";

export default function Layout({ children }) {
  return (
    <>
      <Box maxWidth={"46rem"} width={"94%"} mx="auto">
        <Head></Head>
        <Nav />
        <Box mt={[3, 6]}>{children}</Box>
      </Box>
      <Footer />
    </>
  );
}
