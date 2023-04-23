import React from "react";
import classes from "./TipTotal.module.css";

const TipTotal = () => {
  return (
    <section className={classes.container}>
      <div className={classes.tip}>
        <div className={classes.description}>
          <h3>Tip Amount</h3>
          <span>/ person</span>
        </div>
        <div className={classes.amount}>
          <span>$</span>
          <p>4.27</p>
        </div>
      </div>

      <div className={classes.tip}>
        <div className={classes.description}>
          <h3>Total</h3>
          <span>/ person</span>
        </div>
        <div className={classes.amount}>
          <span>$</span>
          <p>32.79</p>
        </div>
      </div>
      <button className={classes.btn}> reset</button>
    </section>
  );
};

export default TipTotal;
