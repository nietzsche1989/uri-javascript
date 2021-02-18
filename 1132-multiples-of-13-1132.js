
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `10
18`


var lines = input.split('\n');




/********************************************* */
function main(){
  
    let x =  parseInt(lines.shift());
    let y =  parseInt(lines.shift());
    let sum = 0;
    //let n=0;
    for(i=(x+y - Math.abs(x-y))/2;i<= (x+y + Math.abs(x-y))/2;i++){
        if(i%13 != 0){
            sum+=i;
            //n++;
        }
    }
    console.log(sum);
}
   

 main();

