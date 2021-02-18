
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `3
3
9
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
    let num = read(lines);
    let string1 ='';
    let string2 ='';
    let string3 ='';
    let i=0;
    
    while(num[i]){
        
        if(num[i]%2 != 0){    
            for(let z=0;z<(num[i]-1)/2;z++){
                string2 = string2 + ' ';
            }
            string3 = string2.slice(0,string2.length);
            
            string1 = '*';
            console.log(string2+string1);
            string2 = string2.substr(1);

            for(let j=0;j<(num[i]-1)/2;j++){
                string1 = string1 +'**';
                console.log(string2+string1);
                string2 = string2.substr(1);            
            }
            
            console.log(string3 + '*');
            string3 = string3.substr(1);
            console.log(string3 + '***');

            console.log('');
        }
        i++;
    }
    //console.log('');
     
}

 main();

