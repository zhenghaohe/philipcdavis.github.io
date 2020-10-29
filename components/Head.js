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
    : "https://farm2.staticflickr.com/1849/43676135265_5d6be8f15a_o.png";
  return (
    <>
      <NextHead>
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="preload"
          href="/fonts/NittiGrotesk.woff2"
          as="font"
          type="font/woff2"
          crossorigin
        >
          <link
            rel="preload"
            href="/fonts/NittiGrotesk-Bold.woff2"
            as="font"
            type="font/woff2"
            crossorigin
          ></link>
        </link>
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
