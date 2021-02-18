
/*


Read four numbers (N1, N2, N3, N4), which one with 1 digit after the decimal point, corresponding to 4 scores obtained by a student. Calculate the average with weights 2, 3, 4 e 1 respectively, for these 4 scores and print the message "Media: " (Average), followed by the calculated result. If the average was 7.0 or more, print the message "Aluno aprovado." (Approved Student). If the average was less than 5.0, print the message: "Aluno reprovado." (Reproved Student). If the average was between 5.0 and 6.9, including these, the program must print the message "Aluno em exame." (In exam student).

In case of exam, read one more score. Print the message "Nota do exame: " (Exam score) followed by the typed score. Recalculate the average (sum the exam score with the previous calculated average and divide by 2) and print the message “Aluno aprovado.” (Approved student) in case of average 5.0 or more) or "Aluno reprovado." (Reproved student) in case of average 4.9 or less. For these 2 cases (approved or reproved after the exam) print the message "Media final: " (Final average) followed by the final average for this student in the last line.

*/

const input = `-1.0 -1.0`


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


function quadranteR(x,y){
    let quadrante = "";
    // origem, eixo x, eixo y, q1,q2,q3,q4

        if(y== 0 && x==0){
            quadrante = "Origem";     
        }
        else if(y > 0 && x>0){
            quadrante = 'Q1';
            
        }
        else if(y<0 && x>0){
            quadrante = 'Q4';  
        }
        else if(y>0 && x<0){
            quadrante = 'Q2';
        }
        else if(y<0 && x<0){
            quadrante = 'Q3';
        }
        else if( x==0 && y!=0 ){        
            quadrante = 'Eixo Y';
            
        }
        else if(y==0 && x!=0){
            quadrante='Eixo X';
        }

    
    
    return quadrante;    
}

 function main(){ 
    let vector = read(lines);
    
    console.log(quadranteR(vector[0],vector[1]));
    
 }

main();