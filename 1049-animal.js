/*




Read the employee's salary, calculate and print the new employee's salary, as well the money earned and the increase percentual obtained by the employee, with corresponding messages in Portuguese, as the below example.
*/

const input = `invertebrado
anelideo
onivoro`


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

function table(id1,id2,id3){
    
    if(id1=='vertebrado'){
        if(id2 =='ave'){
            if(id3=='carnivoro')
                return 'aguia';
            else
                return 'pomba';
        }
        else{
            if(id3 == 'onivoro')
                return 'homem';
            else
                return 'vaca';
        }
    }
        
    else{
        if(id2 =='inseto'){
            if(id3=='hematofago')
                return 'pulga';
            else
                return 'lagarta';
        }
        else{
            if(id3 == 'hematofago')
                return 'sanguessuga';
            else
                return 'minhoca';
        }
    }


}
    


function main(){ 

  let vector = lines;
    //console.log(vector);

  let id = table(vector[0],vector[1],vector[2]);

  console.log(id);


}

main();

