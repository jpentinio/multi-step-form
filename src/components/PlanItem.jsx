import React, { useState } from "react";
import styles from "./planItem.module.css";

const PlanItem = ({ icon, text, amount, handlePlan, selectedPlan }) => {
  return (
    <div
      onClick={() => handlePlan(text)}
      className={styles.container}
      style={{
        borderColor: selectedPlan === text && "hsl(243, 100%, 62%)",
        backgroundColor: selectedPlan === text && "#f8f9fe",
      }}
    >
      <img src={icon} alt="icon" className={styles.icon} />
      <div className="mt-5">
        <div className={styles.text}>{text}</div>
        <div className={styles.amount}>${amount}/mo</div>
      </div>
    </div>
  );
};

export default PlanItem;
