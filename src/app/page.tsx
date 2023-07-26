"use client";

import styles from "./page.module.css";
import { useLayoutEffect } from "react";

function scrollTop() {
  window.scrollTo(0, 0);
}

function updateSphere(detailsElememtRect?: DOMRect) {
  const sphere = document.getElementById("sphere");
  if (!detailsElememtRect || !sphere) return;

  const { y } = detailsElememtRect;
  const isElementRefPassedSphere = Number(y) <= 969 - 160;

  if (isElementRefPassedSphere) {
    sphere.className = styles.sphereDisplayNone;
  } else {
    sphere.className = styles.sphere;
  }
}

function updateRoot(detailsElememtRect?: DOMRect) {
  const root = document.getElementById("root");
  if (!detailsElememtRect || !root) return;

  const { y } = detailsElememtRect;
  const isElementRefFullPage = Number(y) <= 60 && Number(y) >= -950;

  if (isElementRefFullPage) {
    root.className = `${styles.root} ${styles.darkColor}`;
  } else {
    root.className = styles.root;
  }
}

function updateDetailsContent(detailsElememtRect?: DOMRect) {
  const detailsContent = document.getElementById("details-content");
  if (!detailsElememtRect || !detailsContent) return;

  const { y } = detailsElememtRect;
  const isElementRefFullPage = Number(y) <= 60;

  if (isElementRefFullPage) {
    detailsContent.className = styles.detailsContent;
  } else {
    detailsContent.className = styles.detailsContentNone;
  }
}

function updateHeader(detailsElememtRect?: DOMRect) {
  const header = document.getElementById("header");
  if (!detailsElememtRect || !header) return;

  const { height, y } = detailsElememtRect;
  const isElementRefFullPage = Number(y) <= 60;
  const isElementRefHalfPage = Number(y) <= Number(height) / 2 + 60;

  if (Number(y) <= -950) {
    header.className = `${styles.headerGroup} ${styles.headerFullPage} ${styles.lightColor}`;
  } else if (isElementRefFullPage) {
    header.className = `${styles.headerGroup} ${styles.headerFullPage}`;
  } else if (isElementRefHalfPage) {
    header.className = `${styles.headerGroup} ${styles.headerHalfPage}`;
  } else {
    header.className = styles.headerGroup;
  }
}

function updateWelcomeScreen() {
  const detailsElememtRect = document
    ?.getElementById("details")
    ?.getBoundingClientRect();

  updateHeader(detailsElememtRect);
  updateSphere(detailsElememtRect);
  updateDetailsContent(detailsElememtRect);
  updateRoot(detailsElememtRect);
}

export default function Home() {

  useLayoutEffect(() => {
    if (document) {
      addEventListener("beforeunload", scrollTop);
      addEventListener("scroll", updateWelcomeScreen);
    }
    return () => {
      removeEventListener("scroll", updateWelcomeScreen);
      removeEventListener("beforeunload", scrollTop);
    };
  }, []);

  return (
    <main id="root" className={styles.root}>
      {/* HOME */}
      <div id="home" className={styles.homeSection}>
        <hgroup id="header" className={styles.headerGroup}>
          <h1 className={styles.header}>
            Luigi Palermo <p className={styles.headerThin}>/ Frontend engineer</p>
          </h1>
          <p className={styles.subHeader}>
            I build accessible, inclusive products and digital experiences for
            the web.
          </p>
        </hgroup>
        <div id="sphere" className={styles.sphere} />
      </div>
      {/* Details */}
      <div id="details" className={styles.detailsSection}>
        <div id="details-content" className={styles.detailsContentNone}>
          hello
        </div>
      </div>
      {/* About me */}
      <div id="about-me" className={styles.aboutMeSection}>
        <div id="about-me-content" className={styles.aboutMeContent}>
          me
        </div>
      </div>
      {/* Footer */}
      <footer id="footer" className={styles.footer}>
        elements
      </footer>
    </main>
  );
}
