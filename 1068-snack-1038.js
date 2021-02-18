
/*
sing the following table, write a program that reads a code and the amount of an item. After, print the value to pay. This is a very simple program with the only intention of practice of selection commands.
Input

The input file contains two integer numbers X and Y. X is the product code and Y is the quantity of this item according to the above table.
Output

The output must be a message "Total: R$ " followed by the total value to be paid, with 2 digits after the decimal point.
*/

const input = `2 3`


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


function calcInter(a){
    let inter=0;
    while(inter<=100){
        if(a > inter && a<=inter+25)
            break;
        inter += 25;
    }
    return inter;
}

function table(){
let menu = [
    {code:1, price:4.00},
    {code:2, price:4.50},
    {code:3, price:5.00},
    {code:4, price:2.00},
    {code:5, price:1.50}
];
return menu;
}

function calcTotal(opt,menu,qt){
    let total=0;
    for(let op of menu){
        if(opt === op.code ){
            total = op.price*qt;

        }
    }
    return total;
}
 function main(){ 
    let vector = read(lines);
    let opt= vector[0];
    let qt = vector[1];
    
    let menu = table();
    let total = calcTotal(opt,menu,qt);
    
    console.log('Total: R$ '+ total.toFixed(2));   
 }

main();