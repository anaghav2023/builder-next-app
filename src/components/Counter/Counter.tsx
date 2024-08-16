"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

interface CounterProps {
  counterName: string;
  initialCount?: number;
}

function Counter({ counterName, initialCount = 99 }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className={styles.counter}>
      <div>{counterName}</div>
      <br />
      <button
        className={styles.btn}
        onClick={decrement}
      >
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button
        className={styles.btn}
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
