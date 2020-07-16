import React from "react";
import BurgerIngredent from "./BurgerIngredents/BurgerIngredents";
import classes from "./Burger.module.css";

const Burger = (props) => {
  let totIngredents = Object.keys(props.ingredents)
    .map((igKey) => {
      return [...Array(props.ingredents[igKey])].map((_, index) => {
        return <BurgerIngredent key={igKey + index} type={igKey} />;
      });
    })
    .reduce((prevValueArr, currentValueArr) => {
      return prevValueArr.concat(currentValueArr);
    }, []); //[]is the initial value

  if (totIngredents.length === 0) {
    totIngredents = <p>Please Add Some Ingredents</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredent type="bread-top" />
      {totIngredents}
      <BurgerIngredent type="bread-bottom" />
    </div>
  );
};

export default Burger;
