
const input = `-3.5
3.5
11.0
10.0`


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
        let number = new Number(parseFloat(string[0],10), parseFloat(string[1],10));
        vector.push(number);
        string = lines.shift();
        
    }
   
     return vector;
 }

 function main(){ 
    
   // let n= parseInt(lines.shift());
    let numb = read(lines);
    //console.log(n);

    let cont =0;
    let i=0;
    let sum=0;

    while(cont<2){
        
        n1=numb[i].num1;
        
        
        if(n1>=0 &&n1<=10){
            sum+=n1;
            cont++;
        }
        else{
            console.log('nota invalida');
        }
        
        i++;
    }
    console.log('media = '+ (sum/2).toFixed(2))
    

 }

main();