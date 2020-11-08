import React from "react";
import styles from "../styles/spotlight.module.css";

function SpotlightItem({ isActive, children }) {
  return (
    <div
      className={`${styles["list-item"]} ${
        isActive ? styles["list-item-active"] : ""
      }`}
    >
      {children}
    </div>
  );
}

export default SpotlightItem;
