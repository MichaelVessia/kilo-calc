import type { Component } from "solid-js";
import { displayWeight } from "../logic/units";
import type { Weight, Unit, Kgs, Lbs } from "../types";

const getHeight = (weight: Weight, unit: Unit): number => {
  const maxHeight = 160;

  const kgHeights = (weight: Kgs) => {
    let height;
    switch (weight) {
      // 25 and 20 are default maxHeight
      case 15:
        height = maxHeight * 0.9;
        break;
      case 10:
        height = maxHeight * 0.8;
        break;
      case 5:
        height = maxHeight * 0.7;
        break;
      case 2.5:
        height = maxHeight * 0.6;
        break;
      case 1.25:
        height = maxHeight * 0.5;
        break;
      case 1:
        height = maxHeight * 0.4;
        break;
      case 0.5:
        height = maxHeight * 0.3;
        break;
      case 0.25:
        height = maxHeight * 0.2;
        break;
      default:
        height = maxHeight;
    }
    return height;
  };

  const lbsHeights = (weight: Lbs) => {
    let height;
    switch (weight) {
      // 45 is default maxHeight
      case 25:
        height = maxHeight * 0.9;
        break;
      case 10:
        height = maxHeight * 0.8;
        break;
      case 5:
        height = maxHeight * 0.7;
        break;
      case 2.5:
        height = maxHeight * 0.6;
        break;
      case 1.25:
        height = maxHeight * 0.5;
        break;
      case 1:
        height = maxHeight * 0.4;
        break;
      case 0.5:
        height = maxHeight * 0.3;
        break;
      case 0.25:
        height = maxHeight * 0.2;
        break;
      default:
        height = maxHeight;
    }
    return height;
  };

  const heights = unit === "kg" ? kgHeights : lbsHeights;
  return heights(weight);
};

const getColors = (
  weight: Weight,
  unit: Unit
): { plateColor: string; textColor: string } => {
  const kgColors = (weight: Kgs): string => {
    switch (weight) {
      case 25:
        return "red";
      case 20:
        return "blue";
      case 15:
        return "yellow";
      case 10:
        return "green";
      case 5:
        return "white";
      case 2.5:
        return "black";
      case 1.25:
        return "gray";
      default:
        return "black";
    }
  };

  const lbsColors = (weight: Weight): string => {
    return "gray";
  };

  const textColors = (plateColor: string): string => {
    const darkColors = ["black", "blue"];
    if (darkColors.includes(plateColor)) {
      return "white";
    } else {
      return "black";
    }
  };

  const plateColors = unit === "kg" ? kgColors : lbsColors;
  const plateColor = plateColors(weight);
  const textColor = textColors(plateColor);

  return {
    plateColor: plateColor,
    textColor: textColor,
  };
};

type Props = {
  weight: Weight;
  unit: Unit;
};

const Plate: Component<Props> = (props) => {
  const { plateColor, textColor } = getColors(props.weight, props.unit);
  const plateHeight = getHeight(props.weight, props.unit);

  return (
    <div
      class={`
        flex flex-col justify-center text-center
        border-solid border-2 border-black
        w-[40px] h-[${plateHeight}px] p-1
        bg-[${plateColor}] text-[${textColor}]
      `}
    >
      {displayWeight(props.weight)}
    </div>
  );
};

export default Plate;
