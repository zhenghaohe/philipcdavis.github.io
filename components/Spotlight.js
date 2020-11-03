import React, { useState, useEffect } from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import styles from "../styles/spotlight.module.css";
import "@reach/dialog/styles.css";
import posts from "../data/blog/blog.json";
import { matchSorter } from "match-sorter";
import tinykeys from "tinykeys";

let socials = [
  {
    title: "Twitter",
    url: "https://twitter.com/philipcdavis",
  },
  {
    title: "Github",
    url: "https://github.com/philipcdavis",
  },
];

let projects = [
  {
    title: "React for Design",
    url: "https://react.design",
  },
  {
    title: "Learning D3.js",
    url: "https://learningd3.com",
  },
];

const data = [
  { name: "writing", source: posts },
  {
    name: "social",
    source: socials,
  },
  {
    name: "projects",
    source: projects,
  },
];

console.log(data);

function Spotlight() {
  const [searchText, setSearchText] = useState("");
  const [listIndex, setListIndex] = useState(0);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    setListIndex(0);
  };

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      close();
    }
  };
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => {
    setShowDialog(false);
    setSearchText("");
    setListIndex(0);
  };

  useEffect(() => {
    let unsubscribe = tinykeys(window, {
      "$mod+K": () => {
        open();
      },
      ArrowDown: () => {
        setListIndex(listIndex + 1);
      },
      ArrowUp: () => {
        setListIndex(listIndex - 1);
      },
    });
    return () => {
      unsubscribe();
    };
  });
  return (
    <DialogOverlay
      className={styles.overlay}
      onDismiss={close}
      isOpen={showDialog}
    >
      <DialogContent
        aria-label="Spotlight"
        className={styles.content}
        isOpen={showDialog}
      >
        <div className={styles["search-input-container"]}>
          <input
            onKeyDown={(e) => handleKeyDown(e)}
            spellCheck="false"
            value={searchText}
            onChange={(e) => handleSearchTextChange(e)}
            placeholder="Search"
            className={styles["search-input"]}
          />
          <div className={styles["cmd-hint"]}>⌘ ＋ K</div>
        </div>
        <div className={styles["list-container"]}>
          {matchSorter(data, searchText, {
            baseSort: (a, b) => (a.index < b.index ? -1 : 1),
            keys: [(category) => category.source.map((i) => i.title)],
          }).map((category, i) => (
            <div key={i}>
              <div className={styles["list-heading"]}>{category.name}</div>

              {matchSorter(category.source, searchText, {
                keys: ["title"],
              }).map((item, j) => (
                <div key={item.index} className={styles["list-item"]}>
                  {i} {j} {item.title}
                </div>
              ))}
            </div>
          ))}
        </div>
      </DialogContent>
    </DialogOverlay>
  );
}

export default Spotlight;
