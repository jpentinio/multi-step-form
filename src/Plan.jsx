import React, { useContext, useState } from "react";
import FormTitle from "./components/FormTitle";
import ButtonComponent from "./components/ButtonComponent";
import PlanItem from "./components/PlanItem";
import arcadeIcon from "./assets/icon-arcade.svg";
import advancedIcon from "./assets/icon-advanced.svg";
import proIcon from "./assets/icon-pro.svg";
import styles from "./plan.module.css";
import Switch from "react-switch";
import { FormContext } from "./context";
import { useNavigate } from "react-router-dom";

export const planItems = [
  { icon: arcadeIcon, text: "Arcade", monthly: 9, yearly: 90 },
  { icon: advancedIcon, text: "Advanced", monthly: 12, yearly: 120 },
  { icon: proIcon, text: "Pro", monthly: 15, yearly: 150 },
];

const Plan = () => {
  const navigate = useNavigate();
  const { values, setValues } = useContext(FormContext);
  // const [selectedPlan, setSelectedPlan] = useState(values?.plan);
  const [checked, setChecked] = useState(
    values?.plan.billing === "yearly" ? true : false
  );
  const [error, setError] = useState(false);

  const handleSwitch = (checked) => {
    setChecked(checked);
    let newPlanAmount =
      values?.plan.name &&
      planItems.filter((i) => values?.plan.name === i.text);
    setValues({
      ...values,
      plan: {
        ...values?.plan,
        amount: !checked ? newPlanAmount[0].monthly : newPlanAmount[0].yearly,
        billing: !checked ? "monthly" : "yearly",
      },
    });
  };

  const handlePlan = (selectedPlan) => {
    setError(false);
    setValues({
      ...values,
      plan: { ...selectedPlan, billing: !checked ? "monthly" : "yearly" },
    });
  };

  const handleNext = () => {
    if (!values?.plan.name) {
      setError(true);
    } else {
      navigate("/addons");
    }
  };

  return (
    <div>
      <FormTitle
        title="Select your plan"
        text="You have the option of monthly or yearly billing."
      />
      <div className="my-md-5 my-3">
        <div className={styles.planItems}>
          {planItems.map((item, index) => (
            <PlanItem
              key={index}
              icon={item.icon}
              text={item.text}
              amount={checked ? item.yearly : item.monthly}
              handlePlan={handlePlan}
              selectedPlan={values?.plan}
              isYearly={checked}
            />
          ))}
        </div>
        {error && (
          <div className="mt-3" style={{ color: "red" }}>
            Please select your plan
          </div>
        )}
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

      <ButtonComponent text="Next Step" handleNext={handleNext} />
    </div>
  );
};

export default Plan;
