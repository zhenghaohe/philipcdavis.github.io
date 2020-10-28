import styles from "./nav.module.css";
import { default as NextLink } from "next/link";
import { useRouter } from "next/router";
import { Flex, Box, Link } from "rebass";

export default function Layout() {
  const { asPath } = useRouter();

  return (
    <Flex my={5}>
      <NextLink href="/">
        <Link className={styles.link}>Philip Davis</Link>
      </NextLink>
      <Box flexGrow={1}></Box>
      <NextLink href="/">
        <Link
          className={
            asPath === "/" ? (styles.link, styles.active) : styles.link
          }
        >
          Work
        </Link>
      </NextLink>
      <NextLink href="/writing">
        <Link
          mx={4}
          className={
            (styles.link,
            asPath === "/writing" ? (styles.link, styles.active) : styles.link)
          }
        >
          Writing
        </Link>
      </NextLink>
    </Flex>
  );
}
