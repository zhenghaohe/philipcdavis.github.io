import "../styles/globals.css";
import React from "react";
import { MDXProvider } from "@mdx-js/react";

const components = {
  pre: (props) => <div {...props} />,
  code: (props) => <pre style={{ color: "red" }} {...props} />,
};

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
