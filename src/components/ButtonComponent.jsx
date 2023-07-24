import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./buttonComponent.module.css";
import { Link, useNavigate } from "react-router-dom";

const ButtonComponent = ({ text, next, hideGoBackBtn }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{ left: 100, right: 100, bottom: 40 }}
      className="d-flex justify-content-between align-items-center position-absolute"
    >
      <Link
        to={-1}
        className={styles.link}
        style={{ visibility: hideGoBackBtn && "hidden" }}
      >
        Go Back
      </Link>
      <Button
        onClick={() => navigate(next)}
        size="lg"
        className={styles.buttonNext}
      >
        {text}
      </Button>
    </div>
  );
};

export default ButtonComponent;
