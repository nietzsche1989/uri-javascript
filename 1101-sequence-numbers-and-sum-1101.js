
const input = `5 2
6 3
5 0`


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
    
    while(numbers[i].num1 >0 && numbers[i].num2>0 ){
        let result = [];
        let sum=0;

        for(let j=(n1+n2-Math.abs(n1-n2)) /2;j<=(n1+n2+Math.abs(n1-n2))/2;j++){
            sum+=j;
            result.push(j);
        }
        result.push('Sum='+sum);
        result = result.join(' ');
        console.log(result);
        
        i++;
        n1=numbers[i].num1;
        n2=numbers[i].num2;
        
    }
    

 }

main();