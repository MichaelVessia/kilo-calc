import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import { displayWeight } from "../logic/units";
import Barbell from "./Barbell";
import type { Weight } from "../types";

const Calculator: Component = () => {
  const [weight, setWeight] = createSignal<Weight>(100);

  return (
    <div class="flex flex-col gap-5">
      <input
        class="shadow appearance-none border rounded py-2 px-3 text-gray-700"
        type="number"
        placeholder="Total Weight"
        value={`${weight}`}
      />
      <Barbell weight={weight} />
    </div>
  );
};

export default Calculator;
