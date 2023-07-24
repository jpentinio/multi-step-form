import React from "react";
import FormTitle from "./components/FormTitle";
import ButtonComponent from "./components/ButtonComponent";
import styles from "./summary.module.css";
import Thankyou from "./components/Thankyou";

const Summary = () => {
  return (
    <div>
      {" "}
      {/* <Thankyou /> */}
      <FormTitle
        title="Finishing up"
        text="Double-check everything looks OK before confirming."
      />
      <div className={styles.container}>
        <div className="pb-4 d-flex justify-content-between align-items-center border-bottom">
          <div>
            <div className={styles.plan}>Arcade (Monthly)</div>
            <div className={styles.change}>Change</div>
          </div>
          <div className={styles.plan} style={{ fontWeight: "bold" }}>
            $9/mo
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <div className={styles.addOns}>Online service</div>
          <div className={styles.month}>+$1/mo</div>
        </div>
      </div>
      <div
        style={{ padding: "0 26px" }}
        className="d-flex justify-content-between align-items-center"
      >
        <div className={styles.totalText}>Total (per month)</div>
        <strong className={styles.total}>+$12/mo</strong>
      </div>
      <ButtonComponent text="Confirm" next="/plan" />
    </div>
  );
};

export default Summary;
