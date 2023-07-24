import React from "react";
import styles from "./info.module.css";
import FormTitle from "./components/FormTitle";
import ButtonComponent from "./components/ButtonComponent";
import { Form } from "react-bootstrap";

const Info = () => {
  return (
    <div>
      <FormTitle
        title="Personal Info"
        text="Please provide your name, email address, and phone number."
      />
      <div className="my-5">
        <Form>
          <Form.Group className="mb-4" controlId="formName">
            <Form.Label className={styles.formLabel}>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Stephen King"
              size="lg"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formEmail">
            <Form.Label className={styles.formLabel}>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              size="lg"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formPhoneNumber">
            <Form.Label className={styles.formLabel}>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. +1 234 567 890"
              size="lg"
            />
          </Form.Group>
        </Form>
      </div>

      <ButtonComponent text="Next Step" next="/plan" hideGoBackBtn={true} />
    </div>
  );
};

export default Info;
