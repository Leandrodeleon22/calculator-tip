import React, { useEffect, useState } from "react";
import classes from "./BillComputation.module.css";
import iconPerson from "../assets/images/icon-person.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  billInputChange,
  numOfPeopleInputChange,
  calculateTip,
  customizeTipInputChange,
  calculateTotal,
} from "../features/calculatorSlice";

const BillComputation = () => {
  // const [inputValue, setInputValue] = useState("");
  const [activeButtonId, setActiveButtonId] = useState(null);
  const dispatch = useDispatch();
  const {
    tipOptions,
    bill,
    numOfPeople,
    customizeTip,
    tipPercentage,
    totalAmount,
    isActive,
  } = useSelector((state) => {
    return state.calculator;
  });

  useEffect(() => {
    dispatch(calculateTotal());
  }, [bill, tipPercentage, customizeTip, totalAmount, isActive, numOfPeople]);
  // console.log(tipOptions);
  // const tipOptions = ["5%", "10%", "15%", "25%", "50%", "custom"];

  const handleInputChange = (e) => {
    // e.preventDefault()

    const val = e.target.value;

    if (e.target.validity.valid) dispatch(billInputChange(val));
    else if (val === "" || val === "-") dispatch(billInputChange(val));

    // if (e.target.validity.valid) setInputValue(val)
    // else if (val === "" || val === "-") setInputValue(val);
    // setInputValue(val);
    // console.log(typeof inputValue);
  };

  const tipHandle = (value) => {
    // console.log(tipOptions[1]);
    // console.log(tipOptions.indexOf("10"));
    // const selectedItem = tipOptions.find((item) => {
    //   return item.tip === tipOptions;
    // });
    console.log(value);
    dispatch(calculateTip(value));
  };

  const numOfPeopleHandleChange = (e) => {
    const val = e.target.value;

    if (e.target.validity.valid) dispatch(numOfPeopleInputChange(val));
    else if (val === "" || val === "-") dispatch(numOfPeopleInputChange(val));
  };

  const customizeTipHandle = (e) => {
    const val = e.target.value;

    if (e.target.validity.valid) dispatch(customizeTipInputChange(val));
    else if (val === "" || val === "-") dispatch(customizeTipInputChange(val));
  };

  return (
    <section className={classes.container}>
      <div className={classes.input}>
        <h3>Bill</h3>
        <span>$</span>

        <input
          id="label"
          type="tel"
          pattern="^-?[1-9]\d*\.?\d*$"
          value={bill}
          onChange={handleInputChange}
          placeholder="0"
        ></input>
        {/* <p className={classes.insideLabel}>$</p> */}
      </div>
      <div className={classes.tip}>
        <span>Select tip %</span>
        {tipOptions.map((item) => {
          return (
            <button
              key={item.id}
              id={item.id}
              className={`${classes["btn"]} ${
                isActive && item.id === activeButtonId
                  ? classes["active"]
                  : classes[""]
              }`}
              onClick={() => {
                tipHandle(item.tip);
                setActiveButtonId(item.id);
              }}
            >
              {item.tip}%
            </button>
          );
        })}

        {/* <button className={`${classes["btn"]} ${classes["active"]}`}>5%</button>
        <button className={`${classes["btn"]}`}>10%</button>
        <button className={`${classes["btn"]}`}>15%</button>
        <button className={`${classes["btn"]}`}>25%</button>
        <button className={`${classes["btn"]}`}>50%</button>
        <button className={`${classes["btn"]}`}>custom</button> */}
        <input
          className={classes.tipCustomize}
          type="tel"
          pattern="^-?[1-9]\d*\.?\d*$"
          id="tipLabel"
          placeholder="customize"
          value={tipPercentage}
          onFocus={() => setActiveButtonId(null)}
          onChange={customizeTipHandle}
        />
      </div>
      <div className={classes.people}>
        <h3>Number of People</h3>
        <img src={iconPerson} alt="icon-person" />
        <input
          type="tel"
          id="label"
          pattern="^-?[1-9]\d*\.?\d*$"
          value={numOfPeople}
          onChange={numOfPeopleHandleChange}
          placeholder="0"
        />
      </div>
    </section>
  );
};

export default BillComputation;
