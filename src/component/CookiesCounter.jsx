import { useState } from "react";
import styles from "./cookies.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className={styles.cookieBtn}
      >
        <img
          src="/React-Hooks-oppgave/Cookies.jpg"
          alt="Image of a Cookie"
          className={styles.cookies}
        />
      </button>
    </>
  );
};
export default Counter;
