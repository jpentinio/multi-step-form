import React, { createContext, useContext, useEffect, useState } from "react";
import { addOnsItems } from "./AddOns";
import { useNavigate } from "react-router-dom";

export const FormContext = createContext();

export const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  plan: { name: "", amount: "", billing: "monthly" },
  addOns: [],
  total: "",
};

export const FormProvider = ({ children }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

  const updateAddOns = (billing, addOns) => {
    let newAddOns = addOnsItems.filter((i) =>
      addOns.map((i) => i.addOn).includes(i.title)
    );
    return newAddOns.map((i) => {
      return {
        addOn: i.title,
        value: billing === "yearly" ? i.yearly : i.monthly,
      };
    });
  };

  useEffect(() => {
    setValues((prevState) => ({
      ...prevState,
      addOns: updateAddOns(prevState.plan.billing, prevState.addOns),
    }));
  }, [values?.plan.billing]);

  useEffect(() => {
    if (!values?.plan.name) {
      navigate("/");
    }
  }, []);
  return (
    <FormContext.Provider value={{ values, setValues }}>
      {children}
    </FormContext.Provider>
  );
};
