import React, { useState } from "react";
import FormTitle from "./components/FormTitle";
import styles from "./addOns.module.css";
import { Form } from "react-bootstrap";
import ButtonComponent from "./components/ButtonComponent";

const addOnsItems = [
  { title: "Online service", text: "Access to multiplayer games", months: 1 },
  { title: "Larger storage", text: "Extra 1TB of cloud save", months: 2 },
  {
    title: "Customizable Profile",
    text: "Custom theme on your profile",
    months: 2,
  },
];

const AddOns = () => {
  const [addOns, setAddOns] = useState([]);

  const handleAddOns = (value) => {
    if (addOns.includes(value)) {
      setAddOns(addOns.filter((item) => item !== value));
    } else {
      setAddOns((prev) => [...prev, value]);
    }
  };

  console.log(addOns);
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
              backgroundColor: addOns.includes(item.title) && "#f8f9fe",
              borderColor: addOns.includes(item.title) && "hsl(243, 100%, 62%)",
            }}
            onClick={() => handleAddOns(item.title)}
          >
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={addOns.includes(item.title)}
              />
              <div style={{ marginLeft: 30 }}>
                <div className={styles.addOnsTitle}>{item.title}</div>
                <div className={styles.addOnsText}>{item.text}</div>
              </div>
            </div>
            <div className={styles.addOnsMonth}>+${item.months}/mo</div>
          </div>
        ))}
      </div>
      <ButtonComponent text="Next Step" next="/summary" />
    </div>
  );
};

export default AddOns;
