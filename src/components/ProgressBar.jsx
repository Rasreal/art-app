import { useState, useEffect } from "react";

const TIMER2 = 3000;
export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(TIMER2);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress style={{ color: "red" }} value={remainingTime} max={TIMER2} />
  );
}
