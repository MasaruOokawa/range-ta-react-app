import React, { useState } from 'react';
import Timer from './Timer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [remainingTime, setRemainingTime] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCalculation = () => {
    const b_min = document.getElementById('b_min').value || 0;
    const b_sec = document.getElementById('b_sec').value;
    const b_w1 = document.getElementById('b_w1').value;
    const b_w2 = document.getElementById('b_w2').value;
    const b_qty = document.getElementById('b_qty').value;

    let isec1, w1, w2, qty, ws, isec2;

    isec1 = Number(b_min) * 60 + Number(b_sec);
    w1 = Number(b_w1);
    w2 = Number(b_w2);
    qty = Number(b_qty);

    ws = w1 * isec1 * qty;
    isec2 = Math.floor(ws / w2);

    let minutes = Math.floor(isec2 / 60);
    let seconds = Math.floor(isec2 % 60);

    document.getElementById(
      'result'
    ).innerHTML = `<p className='rslt'>温め時間：${minutes}分${seconds}秒</p>`;

    const totalRemainingTime = minutes * 60 + seconds;
    setRemainingTime(totalRemainingTime);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTimerStart = () => {
    if (!timerRunning && remainingTime !== null && remainingTime > 0) {
      setTimerRunning(true);
    }
  };
  return (
    <div className="container">
      <h1 className="top-ttl fw-bold">レンジタイムアシスト</h1>
      <h2 className="sub-ttl text-center">〜 温め時間を計算して効率よく 〜</h2>
      <div className="form-group">
        <label htmlFor="b_w1">商品記載のワット数と調理時間</label>
        <div className="input-group mt-2">
          <select className="form-control" name="b_w1" id="b_w1" defaultValue="500">
            <option value="500">500</option>
            <option value="600">600</option>
            <option value="700">700</option>
            <option value="800">800</option>
            <option value="1000">1000</option>
          </select>
          {/* <div className="input-group-append"> */}
          <span className="input-group-text">W</span>
          {/* </div> */}
        </div>
      </div>
      <div className="form-group row mt-3 ">
        <div className="input-group col btn-wrapper">
          <select className="form-control" name="b_min" id="b_min" defaultValue="1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
          </select>
          <span className="input-group-text">分</span>
        </div>
        <div className="input-group col btn-wrapper">
          <select className="form-control" name="b_sec" id="b_sec" defaultValue="00">
            <option>00</option>
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
          </select>
          <span className="input-group-text">秒</span>
        </div>
      </div>
      <div className="form-group mt-5">
        <label htmlFor="b_w2">調理したい電子レンジのワット数と個数</label>
        <div className="input-group mt-2">
          <select className="form-control" name="b_w2" id="b_w2" defaultValue="600">
            <option value="500">500</option>
            <option value="600">600</option>
            <option value="700">700</option>
            <option value="800">800</option>
            <option value="1000">1000</option>
            <option value="1500">1500</option>
          </select>
          <span className="input-group-text">W</span>
        </div>
      </div>
      <div className="form-group mt-3">
        <div className="row">
          <div className="input-group">
            <select className="form-control" name="b_qty" id="b_qty" defaultValue="1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <span className="input-group-text">個</span>

          </div>
          {/* <div className="col">
          </div> */}
        </div>
      </div>
      <div className="form-group btn-center mt-5">
        <button
          className={`btn btn-primary fw-bold ${isHovered ? 'hover' : ''}`}
          onClick={handleCalculation}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          計算
        </button>
        <button
          className={`btn btn-secondary fw-bold ${timerRunning ? 'disabled' : ''}`}
          onClick={handleTimerStart}
          disabled={timerRunning}
        >
          タイマー<br />スタート
        </button>
      </div>
      <div className="lead text-center mt-5" id="result"></div>
      
      <Timer
        remainingTime={remainingTime}
        setRemainingTime={setRemainingTime}
        timerRunning={timerRunning}
      />
      <div className="old-site-link d-grid  justify-content-md-end">
      <button type="button" className="btn btn-link btn-sm">
        <a href="https://masaruookawa.github.io/microwave_calc/" className="link-secondary">旧サイトへ</a>
        </button>
      </div>
    </div>
    
  );
};

export default App;

