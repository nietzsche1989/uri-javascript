
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `6
100 150 1.0 0
90000 120000 5.5 3.5
56700 72000 5.2 3.0
123 2000 3.0 2.0
100000 110000 1.5 0.5
62422 484317 3.1 1.0`


var lines = input.split('\n');




/********************************************* */


 function main(){        
 
    let n = parseInt(lines.shift());

    
    for(let i =0; i<n;i++){
        
        let string = lines.shift().split(' ');
        let pa = parseInt(string[0]);
        let pb = parseInt(string[1]);
        let g1 = parseFloat(string[2]);
        let g2 = parseFloat(string[3]);
        
        let t = 0;
        //console.log('pa = ' +  pa*g1);
        //console.log('pb = ' + pb);
        while(pb >= pa){
            pa = pa + Math.floor(pa*g1/100);
            pb = pb + Math.floor(pb*g2/100);
                
            t++;
            //console.log('pa = ' + pa);
            //console.log('pb = ' + pb);
            if(t>100){
                console.log('Mais de 1 seculo.');
                break;
            }
        }
        
        if(t<=100)
            console.log(t + ' anos.');
    }

   //console.log(result.toFixed(2));
 }
   
 main();


