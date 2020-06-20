import React from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Aux>
        <div>
          <Burger />
        </div>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
