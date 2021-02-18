
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `0 1
1
2 2
1
3 3
2`


var lines = input.split('\n');




/********************************************* */


 function main(){        
     
    let string = lines.shift().split(' ');
    let inter = parseInt(string[0]);
    let gremio = parseInt(string[1]);

    winInter = 0;
    winGremio =0;
    draws = 0;
    let answer=1;

    while(answer==1){
                if(inter>gremio){
            winInter++;
        }//if
        if(inter<gremio){
            winGremio++;
        }//if
        if(inter == gremio){
            draws++;
        }//if
        console.log('Novo grenal (1-sim 2-nao)');
        answer = parseInt(lines.shift());

        if(answer ==1){
            string = lines.shift().split(' ');
            inter = parseInt(string[0]);
            gremio = parseInt(string[1]);
        }//if

    }//while

    console.log(winInter+winGremio+draws + ' grenais');
    console.log('Inter:'+winInter);
    console.log('Gremio:'+winGremio);
    console.log('Empates:' + draws);
    
    if(winInter>winGremio){
        console.log('Inter venceu mais');
    }//if
    if(winInter < winGremio){
        console.log('Gremio venceu mais');
    }//if
    if(winInter == winGremio){
        console.log('Não houve vencedor');
    }//if
 }//main
   
 main();


