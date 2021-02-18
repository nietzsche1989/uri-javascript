
/*
Peter is organizing an event in his University. The event will be in April month, beginning and finishing within April month. The problem is: Peter wants to calculate the event duration in seconds, knowing obviously the begin and the end time of the event.

You know that the event can take from few seconds to some days, so, you must help Peter to compute the total time corresponding to duration of the event.
*/

const input = `Dia 5
06 : 13 : 23
Dia 6
06 : 13 : 23`


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
    let duration = [0,0,0,0];
    d1 = vector[1];
    h1 =vector[2];
    m1 = vector[4];
    s1 = vector[6];

    d2 = vector[8];
    h2 = vector[9];
    m2 = vector[11];
    s2 = vector[13];

    if(s2-s1 >= 0)
        duration[0] = s2-s1;
    else{
        duration[0] = 60+s2-s1;
        duration[1] = -1;
    }

    if(m2-m1+duration[1]>= 0)
        duration[1] = duration[1] + m2 -m1; 
    else{
        duration[1] = 60 + duration[1] + m2 -m1;
        duration[2] = -1;
    }

    if(h2-h1+duration[2] >= 0){
        duration[2] = duration[2] + h2-h1;
    }
    else{
        duration[2] = 24 + duration[2] + h2-h1;
        duration[3] = -1; 
    }

    duration[3] = duration[3] + d2- d1;

   // console.log(duration);
    
    console.log(duration[3] + ' dia(s)');
    console.log(duration[2] + ' hora(s)');
    console.log(duration[1] + ' minuto(s)');
    console.log(duration[0] + ' segundo(s)');
}

 main();

