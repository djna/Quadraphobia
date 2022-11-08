
class Quadratic {
    
    constructor( a, b, c ){
        this.a = a;
        this.b = b;
        this.c =c;
    }

    evaluate(x){
        // compute value = a x squared + b x + c
        return value;
    }

    solveZero(){

        // use the formula to obtain two solutions
        // and 
        let status = true; // or false if failed
        
        return {
            solved : status,
            solutionValues: [plusSolution, minusSolution ],
            error : null // or reason for failure
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
             if (quadratic.evaluate(value) != 0){
                console.log("Not exactly 0");
             }
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



