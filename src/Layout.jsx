import React, { useRef } from "react";
import styles from "./layout.module.css";
import { Container } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { isMobile } from "react-device-detect";

const Layout = ({ children }) => {
  const windowSize = useRef([window.innerWidth]);
  console.log(windowSize.current[0]);
  return (
    <>
      <div className={styles.desktop}>
        <div className={styles.main}>
          <Sidebar />
          <div className={styles.content}>{children}</div>
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.main}>
          <Sidebar />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
