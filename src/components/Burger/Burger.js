import React from "react";
import BurgerIngredent from "./BurgerIngredents/BurgerIngredents";
import classes from "./Burger.module.css";

const Burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredent type={"bread-top"} />
      <BurgerIngredent type="meat" />
      <BurgerIngredent type="salad" />
      <BurgerIngredent type="cheese" />
      <BurgerIngredent type="bacon" />
      <BurgerIngredent type="bread-bottom" />
    </div>
  );
};

export default Burger;
