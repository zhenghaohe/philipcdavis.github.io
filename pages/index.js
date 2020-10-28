import { Box, Text, Image, Flex, Link } from "rebass";
import styled from "../styles/Home.module.css";
import Layout from "../components/layout";

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
        <a href="https://react.design">React.js course</a> for designers. You
        can find me on <a href="https://twitter.com/philipcdavis">twitter</a>.
      </Text>

      <Text mb={4} mt={5} fontWeight="bold">
        Recent Work
      </Text>
      <Flex mx={-4} flexDirection="column">
        <Flex flexDirection="row">
          <WorkLink
            image="/images/facebook-icon.png"
            name="Facebook"
            dates="2019-Present"
          />
          <WorkLink
            image="/images/apple-icon.png"
            name="Apple"
            dates="2015-2018"
          />
        </Flex>
        <Flex flexDirection="row">
          <WorkLink
            image="/images/react-for-design-icon.png"
            name="React for Design"
            dates="2018-Present"
          />
          <WorkLink
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
        <Link display="block" href="https://react.design/javascript">
          A Designer's Guide to JavaScript
        </Link>

        <Link display="block" href="https://react.design/terminal">
          A Designer's Guide to the Terminal
        </Link>

        <Link display="block" href="/writing/react-is-for-designers">
          React is for Designers
        </Link>

        <Link display="block" href="/writing/on-writing-css">
          On Writing CSS
        </Link>
        <Link display="block" href="/writing/my-first-online-course">
          My First Online Course
        </Link>
      </Box>
    </Layout>
  );
}

function WorkLink(props) {
  return (
    <Flex width="100%" className={styled.workLink} mr={3} mb={4}>
      <Image width="60px" height="60px" src={props.image} />
      <Box ml="16px">
        <Text mt="4px" style={{ lineHeight: 1 }}>
          {props.name}
        </Text>
        <Text opacity={0.6}>{props.dates}</Text>
      </Box>
    </Flex>
  );
}
