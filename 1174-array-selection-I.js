const input = `0
-5
63
-8.5`


var lines = input.split('\n');




/********************************************* */
function read(lines){
    let vector = [];

    let n = 10;


    for(let i = 0; i< n;i++){
        vector.push(parseInt(lines.shift()));
        
    }
   
     return vector;
 }


 function main(){        
    //let x = read(lines);

    let n = 4;
    let list = [];
    
    for(let i=0; i<n;i++){
        let x = parseFloat(lines.shift());
        list[i] = x;
    }//for

    for(let j=0;j<n;j++){
        if(list[j]<=10)
            console.log('A['+j +'] = ' + list[j].toFixed(1));
    }

 }//main
   
 main();


