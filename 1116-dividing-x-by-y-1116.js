
const input = `3
3 -2
-8 0
0 8`


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
    
    let n= parseInt(lines.shift());
    let num = read(lines);
    //console.log(n);

    
    for(let i=0;i<n;i++){
        n1=num[i].num1;
        n2=num[i].num2;
        
        if(n2==0){
            console.log('divisao impossivel');
        }
        else{
            console.log((n1/n2).toFixed(1));
        }
        
    }
    

 }

main();