import React, { useContext, useState } from "react";
import styles from "./info.module.css";
import FormTitle from "./components/FormTitle";
import ButtonComponent from "./components/ButtonComponent";
import { Button, Form } from "react-bootstrap";
import { FormContext } from "./context";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  const { values, setValues, isMobile } = useContext(FormContext);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target[2].value.length !== 11) {
      setError(true);
    } else {
      setError(false);
      setValues({
        ...values,
        name: e.target[0].value,
        email: e.target[1].value,
        phoneNumber: e.target[2].value,
      });
      navigate("/plan");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle
        title="Personal Info"
        text="Please provide your name, email address, and phone number."
      />
      <div className="my-md-5 my-2">
        <Form.Group className="mb-4" controlId="formName">
          <Form.Label className={styles.formLabel}>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            value={values?.name}
            placeholder="e.g. Stephen King"
            size={isMobile ? "sm" : "lg"}
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formEmail">
          <Form.Label className={styles.formLabel}>Email Address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={values?.email}
            placeholder="e.g. stephenking@lorem.com"
            size={isMobile ? "sm" : "lg"}
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formPhoneNumber">
          <Form.Label className={styles.formLabel}>Phone Number</Form.Label>
          <Form.Control
            name="phoneNumber"
            type="number"
            value={values?.phoneNumber}
            placeholder="e.g. 0912 345 6789"
            size={isMobile ? "sm" : "lg"}
            required
            maxLength={11}
            onChange={handleChange}
            isInvalid={error}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid 11-digit mobile number.
          </Form.Control.Feedback>
        </Form.Group>
      </div>
      <ButtonComponent text="Next Step" hideGoBackBtn={true} />
    </Form>
  );
};

export default Info;
