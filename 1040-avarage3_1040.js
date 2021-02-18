
/*


Read four numbers (N1, N2, N3, N4), which one with 1 digit after the decimal point, corresponding to 4 scores obtained by a student. Calculate the average with weights 2, 3, 4 e 1 respectively, for these 4 scores and print the message "Media: " (Average), followed by the calculated result. If the average was 7.0 or more, print the message "Aluno aprovado." (Approved Student). If the average was less than 5.0, print the message: "Aluno reprovado." (Reproved Student). If the average was between 5.0 and 6.9, including these, the program must print the message "Aluno em exame." (In exam student).

In case of exam, read one more score. Print the message "Nota do exame: " (Exam score) followed by the typed score. Recalculate the average (sum the exam score with the previous calculated average and divide by 2) and print the message “Aluno aprovado.” (Approved student) in case of average 5.0 or more) or "Aluno reprovado." (Reproved student) in case of average 4.9 or less. For these 2 cases (approved or reproved after the exam) print the message "Media final: " (Final average) followed by the final average for this student in the last line.

*/

const input = `2.0 4.0 7.5 8.0
6.4`


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


function calcAverage(grades,weights){
    let average=[0,0,0];
    let n=weights.length;
    let sum=0;
    for(let i=0;i<n;i++){
        average[0] += grades[i]*weights[i];
        sum += weights[i];
    }
    average[0] /= sum;
    
    if(average[0]>= 5 && average[0]<7 ){
        average[1] = (average[0] + grades[n]) / 2
        average[2] = grades[n];
    }
    return average;    
}

function printOut(average){
    console.log('Media: '+average[0].toFixed(1));
    
    if (average[0].toFixed(1)>=7)
        console.log('Aluno aprovado.');

    else{
        if(average[0].toFixed(1)<5){
            console.log('Aluno reprovado.');
        }
        else {
            console.log('Aluno em exame.');
            console.log('Nota do exame: '+average[2].toFixed(1));
            if(average[1].toFixed(1)>=5){
                console.log('Aluno aprovado.');
            }
            if(average[1].toFixed(1)<5){
                console.log('Aluno reprovado.');
            }
            console.log('Media final: '+average[1].toFixed(1));
        }
    }


    }


 function main(){ 
    let vector = read(lines);
    let weights=[2,3,4,1];

    let average = calcAverage(vector,weights);
    
    printOut(average);
    
    
 }

main();