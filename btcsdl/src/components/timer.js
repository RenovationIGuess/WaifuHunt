import { useState, useEffect } from "react";
import { getRemainingTimeUntilMsTimestamp } from "../utils/time";

/* const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "01",
}; */

const Timer = ({ countdownTimestampMs, handleDead }) => {
  const [remainingTime, setRemainingTime] = useState(() => {
		return getRemainingTimeUntilMsTimestamp(countdownTimestampMs)
	});

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  useEffect(() => {
    if (countdownTimestampMs < Date.now()) {
      handleDead();
    }
  }, [remainingTime]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div>
      {/* <span>{remainingTime.days}</span>
      <span>:</span> */}
      {remainingTime.hours}:{remainingTime.minutes}:{remainingTime.seconds}
    </div>
  );
};

export default Timer;
