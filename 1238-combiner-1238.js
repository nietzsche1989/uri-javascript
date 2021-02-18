
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `2
Tpo oCder
bbb aa
aa bb`


var lines = input.split('\n');


/********************************************* */


function main(){
    let n =  parseInt(lines.shift());
    let string = lines.shift();
    
    while(string){
        string = string.split(' ');
        let n1 = string[0].length;
        let n2= string[1].length;
        let stringR='';

        for(let j=0;j<(n1+n2+Math.abs(n1-n2))/2;j++ ){
            let c1='';
            let c2 ='';

            if(j<n1){
                c1 = string[0][j];
            }

            if(j<n2){
                c2 = string[1][j];
            }
            stringR= stringR +c1+c2;
        }
        
        console.log(stringR);
        string = lines.shift();
    }

}

 main();

