import styles from "./layout.module.css";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Nav />
      <div>{children}</div>
      {/* Footer */}
    </div>
  );
}
