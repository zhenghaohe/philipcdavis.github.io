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
    : "https://pbs.twimg.com/profile_images/659824786260934656/syJKampr_400x400.jpg";
  return (
    <>
      <NextHead>
        <link
          rel="preload"
          href="/fonts/NittiGrotesk-Regular.woff2"
          as="font"
          type="font/woff2"
          crossorigin
        />
        <link
          rel="preload"
          href="/fonts/NittiGrotesk-Bold.woff2"
          as="font"
          type="font/woff2"
          crossorigin
        />
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
          cardType: props.image ? "summary_large_image" : "summary",
        }}
      />
    </>
  );
};

export default Head;
