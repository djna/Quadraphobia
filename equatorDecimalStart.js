
const Decimal = require('decimal.js');

class Quadratic {
    
    constructor( a, b, c ){
        this.a = new Decimal(a);
        this.b = new Decimal(b);
        this.c = new Decimal(c);
    }

    evaluate(x){
        // compute value of quadratic for specified x
        return value;
    }

    solveZero(){

        // TODO implement these
        let status = false;
        let plusSolution = NaN;
        let minusSolution = Nan;
        let errorMessage = "not implemented"
   
        return {
            solved : status,
            solutionValues: [plusSolution, minusSolution ],
            error : errorMessage
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





