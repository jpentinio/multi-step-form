import React from "react";
import styles from "./sidebar.module.css";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const links = [
  { id: 1, name: "YOUR INFO", path: "/" },
  { id: 2, name: "SELECT PLAN", path: "/plan" },
  { id: 3, name: "ADD-ONS", path: "/addons" },
  { id: 4, name: "SUMMARY", path: "/summary" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      {links.map((link) => (
        <div key={link.id} className={styles.link}>
          <div
            className={styles.linkId}
            style={{
              color: link.path === location.pathname && "#473dff",
              backgroundColor: link.path === location.pathname && "#bfe2fd",
            }}
          >
            {link.id}
          </div>
          <div className="mx-3">
            <div>STEP {link.id}</div>
            <strong className="text-light">{link.name}</strong>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
