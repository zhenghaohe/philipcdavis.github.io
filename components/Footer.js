import React from "react";
import { Box } from "rebass";
import Link from "./Link";
import styles from "../styles/footer.module.css";

function Footer(props) {
  return (
    <Box mt={[5, 6]} className={styles.footer}>
      <Link fontSize={[3, 4]} href="https://twitter.com/philipcdavis">
        @philipcdavis
      </Link>
    </Box>
  );
}

export default Footer;
