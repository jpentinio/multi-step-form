import React from "react";
import styles from "./layout.module.css";
import { Container } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
