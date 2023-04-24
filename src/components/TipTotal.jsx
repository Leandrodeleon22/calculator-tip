import React from "react";
import classes from "./TipTotal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { reset, setActiveButtonId } from "../features/calculatorSlice";

const TipTotal = () => {
  const dispatch = useDispatch();
  const { totalAmount, tipAmountPerson } = useSelector((state) => {
    return state.calculator;
  });
  return (
    <section className={classes.container}>
      <div className={classes.tip}>
        <div className={classes.description}>
          <h3>Tip Amount</h3>
          <span>/ person</span>
        </div>
        <div className={classes.amount}>
          <span>$</span>
          <p>{tipAmountPerson.toFixed(2)}</p>
        </div>
      </div>

      <div className={classes.tip}>
        <div className={classes.description}>
          <h3>Total</h3>
          <span>/ person</span>
        </div>
        <div className={classes.amount}>
          <span>$</span>
          <p>{totalAmount.toFixed(2)}</p>
        </div>
      </div>
      <button
        className={classes.btn}
        onClick={() => {
          dispatch(reset());
          dispatch(setActiveButtonId(null));
        }}
      >
        {" "}
        reset
      </button>
    </section>
  );
};

export default TipTotal;
