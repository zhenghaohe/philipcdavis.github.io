import styles from "../styles/nav.module.css";
import { useRouter } from "next/router";
import { Flex, Box } from "rebass";
import Link from "./Link";

export default function Nav() {
  const { asPath } = useRouter();

  return (
    <Flex my={[4, 5]}>
      <Link href="/" className={styles.link}>
        Philip Davis
      </Link>
      <Box flexGrow={1}></Box>

      <Link
        href="/"
        className={asPath === "/" ? (styles.link, styles.active) : styles.link}
      >
        Work
      </Link>

      <Link
        href="/writing"
        ml={[3, 4]}
        className={
          (styles.link,
          asPath === "/writing" ? (styles.link, styles.active) : styles.link)
        }
      >
        Writing
      </Link>
    </Flex>
  );
}
