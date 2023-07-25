import React, { useContext, useState } from "react";
import FormTitle from "./components/FormTitle";
import styles from "./addOns.module.css";
import { Form } from "react-bootstrap";
import ButtonComponent from "./components/ButtonComponent";
import { FormContext } from "./context";
import { useNavigate } from "react-router-dom";

export const addOnsItems = [
  {
    title: "Online service",
    text: "Access to multiplayer games",
    monthly: 1,
    yearly: 10,
  },
  {
    title: "Larger storage",
    text: "Extra 1TB of cloud save",
    monthly: 2,
    yearly: 20,
  },
  {
    title: "Customizable Profile",
    text: "Custom theme on your profile",
    monthly: 2,
    yearly: 20,
  },
];

const AddOns = () => {
  const navigate = useNavigate();
  const { values, setValues } = useContext(FormContext);
  const [addOns, setAddOns] = useState(values?.addOns);
  const [error, setError] = useState(false);

  const handleAddOns = (value) => {
    if (addOns.map((item) => item.addOn).includes(value.addOn)) {
      setAddOns(addOns.filter((item) => item.addOn !== value.addOn));
    } else {
      setAddOns((prev) => [...prev, value]);
    }
  };

  const handleNext = () => {
    setValues({
      ...values,
      addOns,
    });
    navigate("/summary");
  };

  return (
    <div>
      <FormTitle
        title="Pick add-ons"
        text="Add-ons help enhance your gaming experience."
      />
      <div className={styles.addOnsItems}>
        {addOnsItems.map((item, index) => (
          <div
            key={index}
            className={styles.addOnsItem}
            style={{
              backgroundColor:
                addOns.map((item) => item.addOn).includes(item.title) &&
                "#f8f9fe",
              borderColor:
                addOns.map((item) => item.addOn).includes(item.title) &&
                "hsl(243, 100%, 62%)",
            }}
            onClick={() =>
              handleAddOns({
                addOn: item.title,
                value:
                  values?.plan.billing === "yearly"
                    ? item.yearly
                    : item.monthly,
              })
            }
          >
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={addOns.map((item) => item.addOn).includes(item.title)}
              />
              <div style={{ marginLeft: 30 }}>
                <div className={styles.addOnsTitle}>{item.title}</div>
                <div className={styles.addOnsText}>{item.text}</div>
              </div>
            </div>
            <div className={styles.addOnsMonth}>
              +$
              {values?.plan.billing === "yearly"
                ? `${item.yearly}/yr`
                : `${item.monthly}/mo`}
            </div>
          </div>
        ))}
        {error && (
          <div className="mt-3" style={{ color: "red" }}>
            Please select add-ons
          </div>
        )}
      </div>
      <ButtonComponent text="Next Step" handleNext={handleNext} />
    </div>
  );
};

export default AddOns;
