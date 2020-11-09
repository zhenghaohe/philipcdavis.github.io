import React, { useState, useEffect, createContext } from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import Downshift from "downshift";
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

function Spotlight() {
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => {
    setShowDialog(false);
  };

  useEffect(() => {
    let unsubscribe = tinykeys(window, {
      "$mod+K": () => {
        open();
      },
      Escape: () => {
        close();
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
      <DialogContent aria-label="Spotlight" className={styles.content}>
        <Downshift
          initialHighlightedIndex={0}
          defaultHighlightedIndex={0}
          onChange={(selection) => console.log(selection)}
          itemToString={(item) => (item ? item.title : "")}
        >
          {({
            getInputProps,
            getItemProps,
            getMenuProps,
            inputValue,
            highlightedIndex,
            getRootProps,
          }) => (
            <div {...getRootProps({}, { suppressRefError: true })}>
              <div className={styles["search-input-container"]}>
                <input
                  spellCheck="false"
                  value={inputValue}
                  placeholder="Search"
                  className={styles["search-input"]}
                  {...getInputProps()}
                />
                <div className={styles["cmd-hint"]}>⌘ ＋ K</div>
              </div>
              <div {...getMenuProps()} className={styles["list-container"]}>
                {
                  matchSorter(data, inputValue, {
                    baseSort: (a, b) => (a.index < b.index ? -1 : 1),
                    keys: [(section) => section.source.map((i) => i.title)],
                  }).reduce(
                    (result, section, sectionIndex) => {
                      result.sections.push(
                        <div key={sectionIndex}>
                          <div className={styles["list-heading"]}>
                            {section.name}
                          </div>
                          {matchSorter(section.source, inputValue, {
                            keys: ["title"],
                            baseSort: (a, b) => (a.index < b.index ? -1 : 1),
                          }).map((item, itemIndex) => {
                            const index = result.itemIndex++;
                            return (
                              <div
                                className={`${styles["list-item"]} ${
                                  highlightedIndex === index
                                    ? styles["list-item-active"]
                                    : ""
                                }`}
                                key={itemIndex}
                                {...getItemProps({
                                  item: item,
                                  index: index,
                                })}
                              >
                                {item.title}
                              </div>
                            );
                          })}
                        </div>
                      );
                      return result;
                    },
                    { sections: [], itemIndex: 0 }
                  ).sections
                }
              </div>
            </div>
          )}
        </Downshift>
      </DialogContent>
    </DialogOverlay>
  );
}

export default Spotlight;
