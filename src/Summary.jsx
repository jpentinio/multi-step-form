import React, { useContext, useEffect, useState } from "react";
import FormTitle from "./components/FormTitle";
import ButtonComponent from "./components/ButtonComponent";
import styles from "./summary.module.css";
import Thankyou from "./components/Thankyou";
import { FormContext, initialState } from "./context";
import { planItems } from "./Plan";
import { addOnsItems } from "./AddOns";

const Summary = () => {
  const { values, setValues } = useContext(FormContext);
  const [isConfirm, setIsConfirm] = useState(false);

  const changePlanAmount = (plan) => {
    let newPlan = planItems.filter((i) => plan.name === i.text);
    return plan.billing === "monthly" ? newPlan[0].yearly : newPlan[0].monthly;
  };

  const changeAddOns = (billing, addOns) => {
    let newAddOns = addOnsItems.filter((i) =>
      addOns.map((i) => i.addOn).includes(i.title)
    );
    return newAddOns.map((i) => {
      return {
        addOn: i.title,
        value: billing === "yearly" ? i.monthly : i.yearly,
      };
    });
  };

  const handleChange = () => {
    setValues((prevValues) => ({
      ...prevValues,
      plan: {
        ...prevValues.plan,
        billing: prevValues.plan.billing === "yearly" ? "monthly" : "yearly",
        amount: changePlanAmount(prevValues.plan),
      },
      addOns: changeAddOns(prevValues.plan.billing, prevValues.addOns),
    }));
  };

  const handleConfirm = () => {
    setIsConfirm(true);
    setValues(initialState);
  };

  useEffect(() => {
    let totalAddOns =
      values?.addOns.length &&
      values?.addOns.map((item) => item.value).reduce((a, b) => a + b, 0);
    setValues({
      ...values,
      total: values?.plan.amount + totalAddOns,
    });
  }, [values?.plan.billing]);

  return (
    <div className={isConfirm && styles.confirm}>
      {" "}
      {isConfirm ? (
        <Thankyou />
      ) : (
        <>
          <FormTitle
            title="Finishing up"
            text="Double-check everything looks OK before confirming."
          />
          <div className={styles.container}>
            <div className="pb-4 d-flex justify-content-between align-items-center border-bottom">
              <div>
                <div className={styles.plan}>
                  {values?.plan.name + ` (${values?.plan.billing})`}
                </div>
                <div onClick={handleChange} className={styles.change}>
                  Change
                </div>
              </div>
              <div
                className={styles.plan}
                style={{ fontWeight: "bold", textTransform: "none" }}
              >
                $
                {values?.plan.amount +
                  `/${values?.plan.billing === "yearly" ? "yr" : "mo"}`}
              </div>
            </div>
            {values?.addOns.length
              ? values?.addOns.map((item) => (
                  <div className="d-flex justify-content-between mt-4">
                    <div className={styles.addOns}>{item.addOn}</div>
                    <div className={styles.month}>
                      +$
                      {item.value +
                        `/${values?.plan.billing === "yearly" ? "yr" : "mo"}`}
                    </div>
                  </div>
                ))
              : ""}
          </div>
          <div
            style={{ padding: "0 26px" }}
            className="d-flex justify-content-between align-items-center"
          >
            <div className={styles.totalText}>
              Total (per {values?.plan.billing === "yearly" ? "year" : "month"})
            </div>
            <strong className={styles.total}>
              $
              {values?.total +
                `/${values?.plan.billing === "yearly" ? "yr" : "mo"}`}
            </strong>
          </div>
          <ButtonComponent text="Confirm" handleNext={handleConfirm} />
        </>
      )}
    </div>
  );
};

export default Summary;
