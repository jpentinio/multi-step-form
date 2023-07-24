import React, { useState } from "react";
import FormTitle from "./components/FormTitle";
import ButtonComponent from "./components/ButtonComponent";
import PlanItem from "./components/PlanItem";
import arcadeIcon from "./assets/icon-arcade.svg";
import advancedIcon from "./assets/icon-advanced.svg";
import proIcon from "./assets/icon-pro.svg";
import styles from "./plan.module.css";
import Switch from "react-switch";

const planItems = [
  { icon: arcadeIcon, text: "Arcade", amount: 9 },
  { icon: advancedIcon, text: "Advanced", amount: 12 },
  { icon: proIcon, text: "Pro", amount: 15 },
];

const Plan = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSwitch = (checked) => {
    setChecked(checked);
  };

  const handlePlan = (selectedPlan) => {
    setSelectedPlan(selectedPlan);
  };
  return (
    <div>
      <FormTitle
        title="Select your plan"
        text="You have the option of monthly or yearly billing."
      />
      <div className="my-5" style={{ display: "flex", gap: 18 }}>
        {planItems.map((item, index) => (
          <PlanItem
            key={index}
            icon={item.icon}
            text={item.text}
            amount={item.amount}
            handlePlan={handlePlan}
            selectedPlan={selectedPlan}
          />
        ))}
      </div>
      <div className={styles.toggle}>
        <div
          className={styles.toggleText}
          style={{ color: !checked && "#02295a" }}
        >
          Monthly
        </div>
        <Switch
          onChange={handleSwitch}
          checked={checked}
          handleDiameter={15}
          height={23}
          width={45}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor="#02295a"
          offColor="#02295a"
        />
        <div
          className={styles.toggleText}
          style={{ color: checked && "#02295a" }}
        >
          Yearly
        </div>
      </div>

      <ButtonComponent text="Next Step" next="/addons" />
    </div>
  );
};

export default Plan;
