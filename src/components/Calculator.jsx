import React from "react";
// import Wrapper from "../assets/Wrapper/Calculator";
import classes from "./Calculator.module.css";
import BillComputation from "./BillComputation";
import TipTotal from "./TipTotal";

const Calculator = () => {
  return (
    <main className={classes.container}>
      <section className={classes.calculator}>
        <BillComputation />
        <TipTotal />
      </section>
    </main>
  );
};

export default Calculator;
