



function solve( a, b, c){

     let bsquaredminus4ac = (b ** 2) - (4 * a * c);

     let plusSolution = ( (-b) + Math.sqrt(bsquaredminus4ac) ) / (2 * a );

     let minusSolution = ( (-b) - Math.sqrt(bsquaredminus4ac) ) / (2 * a );

     let sqrt = ( Math.sqrt(bsquaredminus4ac) );
     let bsqrt = ( (-b) - ( Math.sqrt(bsquaredminus4ac) ));

     return {
         solved : true,
         solutionValues: [plusSolution, minusSolution ],
         error : null
    };

}

function displaySolution( solution ) {
    if ( solution.solved){ 
        console.log ("Solution " + solution.solutionValues);
    } else {
        console.log(solution.error);
    }
    
}


displaySolution(solve(1, -5, 6) );
displaySolution(solve(0, -5, 6) );
