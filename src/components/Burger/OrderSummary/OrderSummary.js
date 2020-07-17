import React from "react";
import Aux from "../../../hoc/Auxilary";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const igSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger having</p>
      <ul>{igSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue To Checkout?</p>
      <Button btnType={"Danger"} clicked={props.purchaseCancled}>
        CANCEL
      </Button>
      <Button btnType={"Success"} clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
