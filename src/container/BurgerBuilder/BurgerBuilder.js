import React from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

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
    };
  }
  render() {
    return (
      <Aux>
        <div>
          <Burger ingredents={this.state.ingredent} />
        </div>
        <BuildControls />
      </Aux>
    );
  }
}

export default BurgerBuilder;
