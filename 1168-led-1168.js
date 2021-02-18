
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `3
115380
2819311
23456
`


var lines = input.split('\n');


function read(lines){
    let vector = [];
    let n = lines.length;

    for(let i=0; i<n; i++){
        vector[i] = parseInt(lines.shift());
    }
    return vector;
}

/********************************************* */


function main(){
    let n =  parseInt(lines.shift());


    for(let i=0;i<n;i++){
        let string = lines.shift();
        let sum=0;
        for(let j=0;j<string.length;j++){
            let c = string[j];
            if(c === '1') 
                sum +=2;
            if(c=== '2'|| c=== '3'|| c=== '5' ) 
                sum += 5;
            if(c=== '4')
                sum += 4;
            if(c=== '6' || c=== '9'|| c === '0')
                sum += 6;
            if(c=== '7')
                sum += 3;
            if(c=== '8')
                sum += 7;
        }
        console.log(sum+ ' leds');
    }
     
}

 main();

