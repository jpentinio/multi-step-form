import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import styles from "./buttonComponent.module.css";
import { Link } from "react-router-dom";
import { FormContext } from "../context";

const ButtonComponent = ({ text, handleNext, hideGoBackBtn }) => {
  const { isMobile } = useContext(FormContext);

  return (
    <div className={styles.container}>
      <Link
        to={-1}
        className={styles.link}
        style={{ visibility: hideGoBackBtn && "hidden" }}
      >
        Go Back
      </Link>
      <Button
        type="submit"
        onClick={handleNext}
        size={isMobile ? "sm" : "lg"}
        className={styles.buttonNext}
        data-testid="button"
      >
        {text}
      </Button>
    </div>
  );
};

export default ButtonComponent;
