import type { Component } from "solid-js";
import { displayWeight } from "../logic/units";

const Calculator: Component = () => {
  return <div>{displayWeight(100.25123)}</div>;
};

export default Calculator;
