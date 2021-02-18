
/*
Peter is organizing an event in his University. The event will be in April month, beginning and finishing within April month. The problem is: Peter wants to calculate the event duration in seconds, knowing obviously the begin and the end time of the event.

You know that the event can take from few seconds to some days, so, you must help Peter to compute the total time corresponding to duration of the event.
*/

const input = `7
-5
6
-3.4
4.6
12`


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



/********************************************* */


function main(){
    let vector = read(lines);
    let sum=0;
    let cont = 0;
    let n = vector.length;

    for(let i=0; i< n;i++){
        
        if(vector[i] > 0){
            cont++;
            sum = sum+ vector[i];
        }
    }

    console.log(cont + ' valores positivos');
    console.log((sum/cont).toFixed(1));
}

 main();

