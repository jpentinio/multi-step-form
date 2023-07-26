import React, { useState } from "react";
import styles from "./planItem.module.css";

const PlanItem = ({
  icon,
  text,
  amount,
  selectedPlan,
  isYearly,
  handlePlan,
}) => {
  return (
    <div
      onClick={() =>
        handlePlan({ ...selectedPlan, name: text, amount: amount })
      }
      className={styles.container}
      style={{
        borderColor: selectedPlan.name === text && "hsl(243, 100%, 62%)",
        backgroundColor: selectedPlan.name === text && "#f8f9fe",
      }}
    >
      <img src={icon} alt="icon" className={styles.icon} />
      <div className={styles.planText}>
        <div className={styles.text}>{text}</div>
        <div className={styles.amount}>
          ${amount}
          {isYearly ? "/yr" : "/mo"}
        </div>
        {isYearly && (
          <div className="mt-2" style={{ color: "hsl(213, 96%, 18%" }}>
            2 months free
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanItem;
