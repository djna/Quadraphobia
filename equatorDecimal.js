
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
