import * as React from "react";

interface EmailTemplateProps {
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
    <h1 style={{ color: "#333" }}>New Waitlist Entry</h1>
    <p style={{ fontSize: "16px", color: "#555" }}>Hello,</p>
    <p style={{ fontSize: "16px", color: "#555" }}>
      We have a new addition to the waitlist. The provided email address is:
    </p>
    <p
      style={{
        fontSize: "18px",
        fontWeight: "bold",
        color: "#000",
        marginTop: "10px",
      }}
    >
      {email}
    </p>
    <p style={{ fontSize: "16px", color: "#555", marginTop: "20px" }}>
      Thank you for your attention.
    </p>
  </div>
);
