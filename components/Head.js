import React from "react";
import NextHead from "next/head";
import { NextSeo } from "next-seo";

const Head = function (props) {
  const title = props.title ? props.title : "Philip Davis";
  const description = props.description
    ? props.description
    : "The personal site of Philip Davis";
  const image = props.image
    ? props.image
    : "https://res.cloudinary.com/dpgzvne4j/image/upload/v1604077998/default_ky8gci.png";
  return (
    <>
      <NextHead>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicons/favicon.svg?v=3"
        />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </NextHead>

      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          images: [
            {
              url: image,
            },
          ],
          site_name: "Philip Davis",
        }}
        twitter={{
          handle: "@philipcdavis",
          cardType: "summary_large_image",
        }}
      />
    </>
  );
};

export default Head;
