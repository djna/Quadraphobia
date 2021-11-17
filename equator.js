
const Decimal = require('decimal.js');

class Quadratic {
    
    constructor( a, b, c ){
        this.a = new Decimal(a);
        this.b = new Decimal(b);
        this.c = new Decimal(c);
    }

    evaluate(x){
        let axsquared = this.a.times(x).times(x);
        let bx = this.b.times(x);
        let xpart = axsquared.add(bx);
        let value =  xpart.add(this.c);
        return value;
    }

    solveZero(){

        let bsquaredminus4ac = this.b.toPower(2).minus(
             this.a.times(4).times(this.c) );
   
        let plusSolution = this.b.negated().add( bsquaredminus4ac.sqrt() ) 
                     .dividedBy(this.a.times(2) ) ;
   
        let minusSolution = this.b.negated().minus( bsquaredminus4ac.sqrt() ) 
                    .dividedBy(this.a.times(2) ) ;
   
        return {
            solved : true,
            solutionValues: [plusSolution, minusSolution ],
            error : null
       };
   }

   toString(){
       return this.a + "x^2 + " + this.b + "x + " + this.c;
   }
};


function displaySolution( solution ) {
    if ( solution.solved){ 
        console.log ("Solution " + solution.solutionValues);
    } else {
        console.log(solution.error);
    }   
}

function verifySolution( quadratic, solution ) {
    if ( solution.solved){ 

        solution.solutionValues.forEach(value => {
            console.log( quadratic +  ": x = " + value 
             + ", evaluates to " + quadratic.evaluate(value));
        });
        
    } else {
        console.log(solution.error);
    }   
}

let goodQuadratic = new Quadratic(1, -5, 6);
let goodSolution = goodQuadratic.solveZero();
displaySolution(goodSolution );
verifySolution(goodQuadratic, goodSolution);



let badQuadratic = new Quadratic( 0, -5, 6 );
let badSolution = badQuadratic.solveZero();
displaySolution(badSolution );

let bigQuadratic = new Quadratic(1, -5e50, 6e100);
let bigSolution = bigQuadratic.solveZero();
displaySolution(bigSolution );
verifySolution(bigQuadratic, bigSolution);

let aNan = Number("x");
let anInfinity = 1 /0;
let minusInfinity = -1 / 0;
let unspecified = 0 / 0;
let point1 = 0.1;
let point2 = 0.2;
let point3 = 0.3;

let aBadNumber = Number("x");
let bBadNumber = Number("x");
let badEqualsBad = aBadNumber === bBadNumber;
console.log ( "" + aBadNumber + " === " + aBadNumber + " " + badEqualsBad );

console.log( point1 + " + " +  point2 + " === " + point3 + ": " + ( (point1 + point2) === point3));
console.log( " infinities " + anInfinity + ", " + minusInfinity);

console.log( "infinity equals " + (anInfinity === anInfinity) );
console.log( "nan equals " + (aNan === aNan) );

//let maxi = Number.MAX_SAFE_INTEGER - 1;

/*
for ( let maxi = 9007199254740990; 
          maxi <= 9007199254740993;
          maxi ++ ) {

             console.log("maxi = " + maxi );

          }
*/

let oneMoreThanMax = Number.MAX_VALUE + 1;
console.log("1", oneMoreThanMax);

let lotsMoreThanMax = Number.MAX_VALUE + 9.979201e291;
console.log("lots", lotsMoreThanMax);

let wayMoreThanMax = Number.MAX_VALUE + 9.979202e291;
console.log("way", wayMoreThanMax);

/*
for (let i = (Number.MAX_VALUE/10); i < Number.MAX_VALUE - 1; i++) {
   console.log ("i = " + i);
}
*/

let x = 7777n;


