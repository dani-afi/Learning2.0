// "use strict";

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// calcTempAmplitude([2, 6, 5, 10]);
// calcTempAmplitude(temperatures);
// const amplitudeNew = calcTempAmplitude([1, 2, 3], [4, 5, 6]);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     //C) FIX
//     value: Number(prompt("Degrees celsius")),
//   };
//   //B) FIND
//   console.table(measurement.value);
//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// //A IDENTIFY
// console.log(measureKelvin());

//Challenge
const arr = [17, 21, 23];
const arrr = [12, 5, -5, 0, 4];
let forecast = function (a) {
  let finalString = "";
  for (let i = 0; i < a.length; i++) {
    finalString += `...${a[i]} degree celsius in (${i + 1}) days`;
  }
  console.log(finalString);
};
forecast(arrr);
