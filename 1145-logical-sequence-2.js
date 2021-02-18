
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `3 99`


var lines = input.split('\n');




/********************************************* */



function main(){    

    let n = lines.shift().split(' ');
    let x =  parseInt(n[0]);
    let y = parseInt(n[1]);
    let numbers = [];
    //console.log(y);

    
    for(let i=1; i<=y; i=i+x)
    {
    //console.log(i);    
        let aux=0;
        for(let j=0;j<x;j++){
            if(i+j<=y){
                numbers[j] = j+i;
                aux++;
            }
        }

        numbers= numbers.splice(0, aux);
        
        let string = numbers.join(' ');
        console.log(string);
    }
    
}
   

 main();


