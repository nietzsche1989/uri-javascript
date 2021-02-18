
const input = `5 4
7 2
3 8
2 2`


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
    let n1=numbers[i].num1;
    let n2=numbers[i].num2;
    
    while(numbers[i].num1 != numbers[i].num2){

        if(numbers[i].num1>numbers[i].num2){
            console.log('Decrescente');
        }
        else{
            console.log('Crescente');
        }

        i++;
        n1=numbers[i].num1;
        n2=numbers[i].num2;
        
    }
    

 }

main();