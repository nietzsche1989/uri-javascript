/*



Read the start time and end time of a game, in hours and minutes (initial hour, initial minute, final hour, final minute). Then print the duration of the game, knowing that the game can begin in a day and finish in another day,

Obs.: With a maximum game time of 24 hours and the minimum game time of 1 minute.
*/

const input = `18 30 18 30`


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

function calcTime(time){
    let duration = [];
    let initial_hour = time[0];
    let initial_minute = time[1];
    let final_hour = time[2];
    let final_minute = time[3];
    

    if(final_minute < initial_minute ){
        duration[1] = 60 +  final_minute - initial_minute;
        if(initial_hour > (final_hour-1)){
            duration[0] = 24 + final_hour - initial_hour - 1;
        }
        
        else{
            duration[0] = final_hour - initial_hour -1 ;  
        }

    }
    else{
        duration[1] =  final_minute - initial_minute;
        if(initial_hour> final_hour){
            duration[0] = 24 + final_hour - initial_hour;
        }
        if(initial_hour <= final_hour){
            duration[0] = final_hour - initial_hour;  
        }   
        if(initial_hour == final_hour && final_minute == initial_minute){
            duration[0] = 24;
        }
    
    }
 

    console.log('O JOGO DUROU ' + duration[0] + ' HORA(S) E ' + duration[1]+' MINUTO(S)');

}

/********************************************* */


function main(){ 

  let vector = read(lines);
  
  let time = calcTime(vector);



}

main();





/*







function sortB(array){
    let n = array.length;
    for(let i=1; i<n; i++){
        //console.log('i= '+i);
        for(let j=0; j<n-i;j++){
            //console.log('j= '+j);
            if(array[j]>array[j+1]){
                
                let aux = array[j];
                //console.log('aux = '+aux);
                array[j]= array[j+1];
                array[j+1]= aux;
            }
        }
    }

    return array;
}

function printOut(array){
    for(let i=0; i<n;i++)
        console.log(array[i]);
}

function copy(array){
    n=array.length;
    array2 = [];
    for(let i =0; i<n;i++){
        array2[i] = array[i];
    }
    return array2;
}

 function main(){ 
    let vector = read(lines);
    n=vector.length;
    let vector2 = copy(vector);   
    
    
    
    printOut(sortB(vector2));
    console.log('\n');
    printOut(vector);
    
    
 }
*/
