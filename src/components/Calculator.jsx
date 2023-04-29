import React from "react";
// import Wrapper from "../assets/Wrapper/Calculator";
import classes from "./Calculator.module.css";
import BillComputation from "./BillComputation";
import TipTotal from "./TipTotal";

const Calculator = () => {
  return (
    <main className={classes.container}>
      <div className={classes.splitter}>
        <span>SPLI</span>
        <span>TTER</span>
      </div>
      <section className={classes.calculator}>
        <BillComputation />
        <TipTotal />
      </section>
    </main>
  );
};

export default Calculator;
