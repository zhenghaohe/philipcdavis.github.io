import { Box, Text, Image, Flex } from "rebass";
import Link from "../components/Link";
import styled from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <style jsx global>{`
        :root {
          --surface-background: var(--charcoal);
          --primary-text: var(--white);
          --secondary-text: var(--smoke-shadow);
          --link: #4bb7ff;
        }
      `}</style>
      <Text mb={2}>
        I'm a product designer and UI engineer. Right now I'm working on the
        Facebook design system. Previously I was designing interfaces at Apple.
        In my free time I created a{" "}
        <Link underline href="https://react.design">
          React.js course
        </Link>{" "}
        for designers.
      </Text>

      <Text mb={4} mt={5} fontWeight="bold">
        Recent Work
      </Text>
      <Flex mx={-4} flexDirection="column">
        <Flex flexDirection="row">
          <WorkLink
            url="https://facebook.com"
            image="/images/facebook-icon.png"
            name="Facebook"
            dates="2019-Present"
          />
          <WorkLink
            url="/work/apple"
            image="/images/apple-icon.png"
            name="Apple"
            dates="2015-2018"
          />
        </Flex>
        <Flex flexDirection="row">
          <WorkLink
            url="https://react.design"
            image="/images/react-for-design-icon.png"
            name="React for Design"
            dates="2018-Present"
          />
          <WorkLink
            url="https://learningd3.com"
            image="/images/learningd3-icon.png"
            name="Learning D3"
            dates="2015-Present"
          />
        </Flex>
      </Flex>

      <Text mb={4} mt={5} fontWeight="bold">
        Featured Writing
      </Text>
      <Box>
        <Link underline display="block" href="https://react.design/javascript">
          A Designer's Guide to JavaScript
        </Link>

        <Link underline display="block" href="https://react.design/terminal">
          A Designer's Guide to the Terminal
        </Link>

        <Link underline display="block" href="/writing/react-is-for-designers">
          React is for Designers
        </Link>

        <Link underline display="block" href="/writing/on-writing-css">
          On Writing CSS
        </Link>
        <Link underline display="block" href="/writing/my-first-online-course">
          My First Online Course
        </Link>
      </Box>
    </Layout>
  );
}

function WorkLink(props) {
  return (
    <Link
      width="100%"
      passHref
      className={styled.workLink}
      href={props.url}
      mr={3}
      mb={4}
    >
      <Flex>
        <Image width="60px" height="60px" src={props.image} />
        <Box ml="16px">
          <Text mt="4px" style={{ lineHeight: 1 }}>
            {props.name}
          </Text>
          <Text opacity={0.6}>{props.dates}</Text>
        </Box>
      </Flex>
    </Link>
  );
}
