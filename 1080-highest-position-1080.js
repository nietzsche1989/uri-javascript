
const input = `2222
113
45
3456445
666
777`


var lines = input.split('\n');


 function read(vector){
     let size = vector.length;
     

     for(let i=0; i<size; i++){
         vector[i]= parseFloat(vector[i],10);
     }
     return vector;
 }

 function main(){ 
     let vector = read(lines);
     let maior=0;
     let index1=0;

    for(let i=0; i<vector.length;i++){
        if( vector[i] >= maior){
            maior = vector[i];
            index1 = i;
            //console.log(index1);
        }
    }
    
    
  
     console.log(maior.toFixed(0));
     console.log(index1+1);

 }

main();