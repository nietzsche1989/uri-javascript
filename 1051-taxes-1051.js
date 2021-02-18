/*




Read the employee's salary, calculate and print the new employee's salary, as well the money earned and the increase percentual obtained by the employee, with corresponding messages in Portuguese, as the below example.
*/

const input = `3002.00`


var lines = input.split('\n');

/********************************************** */
//line= input.split('.');
//console.log(line);





function read(lines){
    vector = [];

    for(let i=0; i<lines.length; i++){
       let line = lines[i].split(' ');
           
       for(let j=0;j<line.length;j++){
           vector.push( parseFloat(line[j],10) );
       }
    }
    return vector;
}



/********************************************* */

function calcTax(salary,rate){
    let total=0;
    
    if(salary > 2000){
        if(salary <= 3000){
            total = (salary-2000)*rate[1];      
        }
        else{
            
            if(salary<=4500){
                total = 1000*rate[1]+ (salary-3000)*rate[2]; 
            }
            else{
                total = 1000*rate[1] + 1500*rate[2] + (salary-4500)*rate[3]; 
            }
        }      

    }
    return total;
}


function main(){
 let vector = read(lines);
 let salary =  vector[0];
 let rate = [0,8,18,28];

 let tax = calcTax(salary,rate);


 if(tax > 0){
    console.log('R$ '+(tax/100).toFixed(2));
    return 1;
 }
 console.log('Isento');
}

 main();

