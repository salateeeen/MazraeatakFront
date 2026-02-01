import { useState } from "react";
import styles from "./PaymentMethods.module.css";

const paymentMethods = [
  {
    id: "card",
    label: "Card",
    icon: "💳",
    description: "Visa, MasterCard",
  },
  {
    id: "paypal",
    label: "PayPal",
    icon: "🅿️",
    description: "Pay with PayPal balance",
  },
  {
    id: "apple",
    label: "Apple Pay",
    icon: "🍎",
    description: "Fast & secure",
  },
];

export default function PaymentMethod() {
  const [method, setMethod] = useState("card");

  return (
    <div className={styles.container}>
      {paymentMethods.map((m) => (
        <label
          key={m.id}
          className={`${styles.card} ${
            method === m.id ? styles.active : ""
          }`}
        >
          <input
            type="radio"
            name="payment"
            value={m.id}
            checked={method === m.id}
            onChange={() => setMethod(m.id)}
            className={styles.radio}
          />

          <span className={styles.icon}>{m.icon}</span>

          <div className={styles.text}>
            <div className={styles.label}>{m.label}</div>
            <div className={styles.desc}>{m.description}</div>
          </div>

          {method === m.id && <span className={styles.check}>✓</span>}
        </label>
      ))}
    </div>
  );
}
