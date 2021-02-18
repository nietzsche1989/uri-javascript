/*




Read the employee's salary, calculate and print the new employee's salary, as well the money earned and the increase percentual obtained by the employee, with corresponding messages in Portuguese, as the below example.
*/

const input = `31`


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

function table(){
    let ddd = [
    {dd:61, city: 'Brasilia'},
    {dd:71, city: 'Salvador'},
    {dd:11, city: 'Sao Paulo'},
    {dd:21, city: 'Rio de Janeiro'},
    {dd:32, city: 'Juiz de Fora'},
    {dd:19, city: 'Campinas'},
    {dd:27, city: 'Vitoria'},
    {dd:31, city: 'Belo Horizonte'}
    ];
    return ddd;
}


function main(){
 let vector = read(lines);
 let dd =  vector[0];
 let ddd = table();
 
 for(let obj of ddd){
     if(obj.dd == dd){
        console.log(obj.city);
        return 1;
     }
 }
 
 console.log('DDD nao cadastrado');

}

 main();

