import type { Kgs, Lbs, Weight, Rounding } from "../types";

export const kgToLbs = (kg: Kgs): Lbs => {
  return kg * 2.20462262;
};

export const lbsToKg = (lbs: Lbs): Kgs => {
  return lbs / 2.20462262;
};

export const displayWeight = (weight: Weight): string => {
  return weight.toFixed(2).replace(".00", "");
};

export const plateRound = (
  weight: Weight,
  smallestPlate: Weight,
  rounding: Rounding
): Weight => {
  const roundTo = smallestPlate * 2;
  let roundingFn;
  if (rounding === "up") {
    roundingFn = Math.ceil;
  } else if (rounding === "down") {
    roundingFn = Math.floor;
  } else {
    roundingFn = Math.round;
  }
  return roundingFn(weight / roundTo) * roundTo;
};
