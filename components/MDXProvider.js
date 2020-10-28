import React from "react";
import { MDXProvider } from "@mdx-js/react";

const mdComponents = {
  pre: (props) => <pre style={{ color: "green" }} {...props} />,
};

export default ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
);
