
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `8
1
7
1
2
2
3
3
4`


var lines = input.split('\n');




/********************************************* */



function main(){
  
    
    let typeC = [0,0,0];
    
    let x =  parseInt(lines.shift());
    
    while(x != 4){
        //console.log(x);
        if(x==1){
            typeC[0]++;;
        }
        if(x==2){
            typeC[1]++;
        }
        if(x==3){
            typeC[2]++;
        }

        x = parseInt(lines.shift());

    }
    console.log('MUITO OBRIGADO');
    console.log('Alcool: '+typeC[0]);
    console.log('Gasolina: '+typeC[1]);
    console.log('Diesel: '+typeC[2]);
    
    
}
   

 main();


