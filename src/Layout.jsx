import React from "react";
import styles from "./layout.module.css";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({ children }) => {
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
