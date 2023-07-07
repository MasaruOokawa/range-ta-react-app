import React, { useEffect } from 'react';

const Timer = ({ remainingTime, setRemainingTime, timerRunning }) => {
  useEffect(() => {
    let timer;
    if (timerRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      clearInterval(timer);
      alert('タイマーが終了しました。');
    }
    return () => clearInterval(timer);
  }, [remainingTime, timerRunning, setRemainingTime]);

  return (
    <>
      {remainingTime !== null && (
        <p className="timer lead text-center alert alert-warning" role="alert">
          残り時間: {Math.floor(remainingTime / 60)}分{remainingTime % 60}秒
        </p>
      )}
    </>
  );
};

export default Timer;
