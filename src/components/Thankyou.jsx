import React from "react";
import icon from "../assets/icon-thank-you.svg";

const Thankyou = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <img src={icon} alt="icon" width={90} height={90} />
      <h1
        style={{ fontWeight: "bold", color: "hsl(213, 96%, 18%)" }}
        className="mt-5"
      >
        Thank you!
      </h1>
      <div
        className="text-center mt-3 px-5"
        style={{ color: "hsl(231, 11%, 63%)", fontSize: 18 }}
      >
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </div>
    </div>
  );
};

export default Thankyou;
