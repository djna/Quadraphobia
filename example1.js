
let aBadNumber = Number("x");
let bBadNumber = Number("x");
let badEqualsBad = aBadNumber === bBadNumber;
console.log ( "" + aBadNumber + " === " + aBadNumber + " " + badEqualsBad );

let point1 = 0.1;
let point2 = 0.2;
let point3 = 0.3;
console.log( point1 + " + " +  point2 + " === " + point3 + ": " + ( (point1 + point2) === point3));

let oneMoreThanMax = Number.MAX_VALUE + 1;
console.log("1 ", oneMoreThanMax);

let lotsMoreThanMax = Number.MAX_VALUE + 9.979201e291;
console.log("lots ", lotsMoreThanMax);

let wayMoreThanMax = Number.MAX_VALUE + 9.979202e291;
console.log("way ", wayMoreThanMax);
