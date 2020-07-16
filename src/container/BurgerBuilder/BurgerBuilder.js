import React from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredent: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      totPrice: 4,
      purchaseable: false,
    };
  }

  updatePurchaseStateHandler = (ingredents) => {
    const sum = Object.keys(ingredents)
      .map((igKey) => {
        return ingredents[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  };

  addIngredentHandler = (type) => {
    const oldCount = this.state.ingredent[type];
    const UpdatedCount = oldCount + 1;
    const updatedIngredents = {
      ...this.state.ingredent,
    };

    updatedIngredents[type] = UpdatedCount;
    const priceAddition = INGREDENT_PRICES[type];
    const oldPrice = this.state.totPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ ingredent: updatedIngredents, totPrice: newPrice });
    this.updatePurchaseStateHandler(updatedIngredents);
  };

  removeIngredentHandler = (type) => {
    const oldCount = this.state.ingredent[type];
    if (oldCount <= 0) {
      return;
    }
    const UpdatedCount = oldCount - 1;
    const updatedIngredents = {
      ...this.state.ingredent,
    };

    updatedIngredents[type] = UpdatedCount;
    const priceDeduction = INGREDENT_PRICES[type];
    const oldPrice = this.state.totPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ ingredent: updatedIngredents, totPrice: newPrice });
    this.updatePurchaseStateHandler(updatedIngredents);
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredent,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <div>
          <Burger ingredents={this.state.ingredent} />
        </div>
        <BuildControls
          ingredentAdded={this.addIngredentHandler}
          ingredentRemove={this.removeIngredentHandler}
          disabled={disabledInfo}
          price={this.state.totPrice}
          purchaseable={this.state.purchaseable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
