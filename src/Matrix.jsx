import React, { useState } from "react";
import "./Matrix.css";

function Matrix() {
  const [redBox, setRedBox] = useState([]);
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    let newArr = redBox;

    setCount(count + 1);
    if (redBox.length === 2) {
      newArr.shift();

      setRedBox([...newArr, e.target.id]);
    } else if (redBox.length <= 2 && redBox.length > 0) {
      setRedBox((arr) => [...arr, e.target.id]);
    } else {
      setRedBox([e.target.id]);
    }
    document.getElementById(e.target.id).innerHTML = "Box #" + count;
  };

  return (
    <div className="container">
      <div className="container-body">
        <div className="box-container">
          <div
            className={
              redBox.indexOf("1") !== -1 ? "box box-red" : " box box-blue"
            }
            onClick={handleClick}
            id="1"
          >
            <label id="1"></label>
          </div>

          <div
            className={
              redBox.indexOf("2") !== -1 ? "box box-red" : " box box-blue"
            }
            id="2"
            onClick={handleClick}
          >
            <label id="2"></label>
          </div>

          <div
            className={
              redBox.indexOf("3") !== -1 ? "box box-red" : " box box-blue"
            }
            id="3"
            onClick={handleClick}
          >
            <label id="3"></label>
          </div>

          <div
            className={
              redBox.indexOf("4") !== -1 ? "box box-red" : " box box-blue"
            }
            id="4"
            onClick={handleClick}
          >
            <label id="4"></label>
          </div>
        </div>

        <div className="box-container">
          <div
            className={
              redBox.indexOf("5") !== -1 ? "box box-red" : " box box-blue"
            }
            id="5"
            onClick={handleClick}
          >
            <label id="5"></label>
          </div>

          <div
            className={
              redBox.indexOf("6") !== -1 ? "box box-red" : " box box-blue"
            }
            id="6"
            onClick={handleClick}
          >
            <label id="6"></label>
          </div>

          <div
            className={
              redBox.indexOf("7") !== -1 ? "box box-red" : " box box-blue"
            }
            id="7"
            onClick={handleClick}
          >
            <label id="7"></label>
          </div>

          <div
            className={
              redBox.indexOf("8") !== -1 ? "box box-red" : " box box-blue"
            }
            id="8"
            onClick={handleClick}
          >
            <label id="8"></label>
          </div>
        </div>
        <div className="box-container">
          <div
            className={
              redBox.indexOf("9") !== -1 ? "box box-red" : " box box-blue"
            }
            id="9"
            onClick={handleClick}
          >
            <label id="9"></label>
          </div>
          <div
            className={
              redBox.indexOf("10") !== -1 ? "box box-red" : " box box-blue"
            }
            id="10"
            onClick={handleClick}
          >
            <label id="10"></label>
          </div>
          <div
            className={
              redBox.indexOf("11") !== -1 ? "box box-red" : " box box-blue"
            }
            id="11"
            onClick={handleClick}
          >
            <label id="11"></label>
          </div>
          <div
            className={
              redBox.indexOf("12") !== -1 ? "box box-red" : " box box-blue"
            }
            id="12"
            onClick={handleClick}
          >
            <label id="12"></label>
          </div>
        </div>
        <div className="box-container">
          <div
            className={
              redBox.indexOf("13") !== -1 ? "box box-red" : " box box-blue"
            }
            id="13"
            onClick={handleClick}
          >
            <label id="13"></label>
          </div>
          <div
            className={
              redBox.indexOf("14") !== -1 ? "box box-red" : " box box-blue"
            }
            id="14"
            onClick={handleClick}
          >
            <label id="14"></label>
          </div>
          <div
            className={
              redBox.indexOf("15") !== -1 ? "box box-red" : " box box-blue"
            }
            id="15"
            onClick={handleClick}
          >
            <label id="15"></label>
          </div>
          <div
            className={
              redBox.indexOf("16") !== -1 ? "box box-red" : " box box-blue"
            }
            id="16"
            onClick={handleClick}
          >
            <label id="16"></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Matrix;
