import type { Component } from "solid-js";
import { displayWeight } from "../logic/units";
import Plate from "./Plate";

const Barbell: Component = () => {
  return <Plate weight={25} unit="kg" />;
};

export default Barbell;
