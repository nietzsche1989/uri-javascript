
/*

Read the start time and end time of a game, in hours. Then calculate the duration of the game, knowing that the game can begin in a day and finish in another day, with a maximum duration of 24 hours. The message must be printed in portuguese “O JOGO DUROU X HORA(S)” that means “THE GAME LASTED X HOUR(S)”
*/

const input = `1 0`


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






function main(){ 

  let vector = read(lines);

  a= vector[0];
  b=vector[1];
  time_h = 0;
  if(a>=b){
    time_h = 24 -a +b;
  }
  else
    time_h = b-a;

  console.log('O JOGO DUROU '+ time_h + ' HORA(S)')
  
  //console.log(vector);


}

main();











