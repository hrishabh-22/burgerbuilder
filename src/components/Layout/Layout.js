import React from "react";
import Aux from "../../hoc/Auxilary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/ToolBar/ToolBar";

const Layout = (props) => (
  <Aux>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
