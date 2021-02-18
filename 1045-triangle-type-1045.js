
/*


Read four numbers (N1, N2, N3, N4), which one with 1 digit after the decimal point, corresponding to 4 scores obtained by a student. Calculate the average with weights 2, 3, 4 e 1 respectively, for these 4 scores and print the message "Media: " (Average), followed by the calculated result. If the average was 7.0 or more, print the message "Aluno aprovado." (Approved Student). If the average was less than 5.0, print the message: "Aluno reprovado." (Reproved Student). If the average was between 5.0 and 6.9, including these, the program must print the message "Aluno em exame." (In exam student).

In case of exam, read one more score. Print the message "Nota do exame: " (Exam score) followed by the typed score. Recalculate the average (sum the exam score with the previous calculated average and divide by 2) and print the message “Aluno aprovado.” (Approved student) in case of average 5.0 or more) or "Aluno reprovado." (Reproved student) in case of average 4.9 or less. For these 2 cases (approved or reproved after the exam) print the message "Media final: " (Final average) followed by the final average for this student in the last line.

*/

const input = `6.0 8.0 8.0`


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
  vector.sort(function(a,b){return b-a})
  a= vector[0];
  b=vector[1];
  c = vector[2];
  
  //console.log(vector);

  if(a>= b+c){
    console.log('NAO FORMA TRIANGULO');
  }

  else{
    if(a**2 == (b**2 + c**2) ){
      console.log('TRIANGULO RETANGULO');
    }
    if(a**2> (b**2 + c**2)){
        console.log('TRIANGULO OBTUSANGULO');
    }
    if(a**2 < (b**2 + c**2)){
      console.log('TRIANGULO ACUTANGULO');
  }


  if(a==b || b==c || a==c){
    if(a==b && b==c){
      console.log('TRIANGULO EQUILATERO');
    }
    else
    console.log('TRIANGULO ISOSCELES');
  }
}


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
