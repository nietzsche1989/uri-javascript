
const input = `1 1
3 -2
-8 -1
-7 1
0 2`


var lines = input.split('\n');



function Number(n1,n2){
    this.num1 = n1;
    this.num2 = n2;
}


 function read(lines){
    let vector = [];
    let string ='';

    string = lines.shift();

    while(string){

        string = string.split(' ');
        let number = new Number(parseInt(string[0],10), parseInt(string[1],10));
        vector.push(number);
        string = lines.shift();
        
    }
   
     return vector;
 }

 function main(){ 
    
    let numbers = read(lines);
    ///console.log(numbers);
    let i=0;
    let x=numbers[i].num1;
    let y=numbers[i].num2;
    
    while(x !=0 && y!=0){
        if(y > 0 && x>0){
            console.log('primeiro');
            
        }
        else if(y<0 && x>0){
            console.log('quarto');  
        }
        else if(y>0 && x<0){
            console.log('segundo');
        }
        else if(y<0 && x<0){
            console.log('terceiro');
        }

        i++;
        x=numbers[i].num1;
        y=numbers[i].num2;
        
    }
    

 }

main();