
class Quadratic {
    
    constructor( a, b, c ){
        this.a = a;
        this.b = b;
        this.c =c;
    }

    evaluate(x){
        let axsquared = this.a * x * x;
        let bx = this.b * x;
        let xpart = axsquared + bx;
        let value = xpart + this.c;
        return value;
    }

    solveZero(){

        if (this.a == 0 ){
            return {
                solved : false,
                solutionValues: null,
                error : "This is not a valid quadratic, 'a' is zero"
           };
        }

        let bsquaredminus4ac = (this.b ** 2) - (4 * this.a * this.c);

        if ( bsquaredminus4ac < 0 ){
            return {
                solved : false,
                solutionValues: null,
                error : "This quaratic has no real solutions, 'b squared - 4ac' is negative"
           };
        }
   
        let plusSolution = ( (-this.b) + Math.sqrt(bsquaredminus4ac) ) / (2 * this.a );
   
        let minusSolution = ( (-this.b) - Math.sqrt(bsquaredminus4ac) ) / (2 * this.a );
   
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

            let closeEnoughToZero = Math.abs(value * value / 1e15);

            let evaluation = quadratic.evaluate(value);
            let validSolution = (evaluation <= closeEnoughToZero )
            if ( validSolution ){
                console.log( quadratic +  ": x = " + value 
                            + ", evaluates to " + evaluation + ", which is close enough to zero");
                return true;
            } else {
                console.log( quadratic +  ": x = " + value 
                            + ", evaluates to " + evaluation + ", which is not nearly zero ");
                return false;
            }
        });
        
    } else {
        console.log(solution.error);
        return false;
    }   
}

console.log("Good Quadratic");
let goodQuadratic = new Quadratic(1, -5, 6);
let goodSolution = goodQuadratic.solveZero();
displaySolution(goodSolution );
verifySolution(goodQuadratic, goodSolution);


console.log("Bad Quadratic");
let badQuadratic = new Quadratic( 0, -5, 6 );
let badSolution = badQuadratic.solveZero();
displaySolution(badSolution );

console.log("Big Quadratic");
let bigQuadratic = new Quadratic(1, -5e50, 6e100);
let bigSolution = bigQuadratic.solveZero();
displaySolution(bigSolution );
verifySolution(bigQuadratic, bigSolution);



