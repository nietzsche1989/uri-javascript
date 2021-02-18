
/*




Read the employee's salary, calculate and print the new employee's salary, as well the money earned and the increase percentual obtained by the employee, with corresponding messages in Portuguese, as the below example.
*/

const input = `400.05`


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

function table(salary){
    
    if(salary>=0 && salary <= 400)
        return 15;
    if(salary>400 && salary <= 800)
        return 12;
    if(salary>800 && salary <= 1200)
        return 10;
    if(salary>1200 && salary <= 2000)
        return 7;

    return 4;    
}

function main(){ 

  let vector = read(lines);
  let salary = vector[0];

  let percentage = table(salary);

  console.log('Novo salario: '+ (salary *(100+percentage)/100).toFixed(2));
  console.log('Reajuste ganho: ' + (salary *percentage/100).toFixed(2));
  console.log('Em percentual: ' + percentage.toFixed(0) + ' %' );



}

main();




