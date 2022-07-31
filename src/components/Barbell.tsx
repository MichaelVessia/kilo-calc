import type { Component } from "solid-js";
import type { Weight } from "../types";
import { displayWeight } from "../logic/units";
import Plate from "./Plate";

type Props = {
  weight: Weight;
};

const Barbell: Component<Props> = (props) => {
  return <Plate weight={props.weight} unit="kg" />;
};

export default Barbell;
