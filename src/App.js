import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [isrunning, setIsrunning] = useState(false);
  const [time, setTime] = useState(0);

  const formattime = (sec) => {
    const min = Math.floor(sec / 60);
    const remainingsec = Math.floor(sec % 60);
    return `${min}:${remainingsec < 10 ? "0" : ""}${remainingsec}`;
  };

  const toggle = () => {
    setIsrunning((prev) => !prev);
  };

  const reset = () => {
    setIsrunning(false);
    setTime(0);
  };

  useEffect(() => {
    let intervalid;
    if (isrunning) {
      intervalid = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalid);
    }
    return () => clearInterval(intervalid);
  }, [isrunning]);
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {formattime(time)}</p>
      <button onClick={toggle}>{isrunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
