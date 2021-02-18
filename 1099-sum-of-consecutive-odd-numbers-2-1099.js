
const input = ` 7
4 5
13 10
6 4
3 3
3 5
3 4
3 8`


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
        //console.log('i= '+i);
        n1=num[i].num1;
        n2=num[i].num2;
        let sum=0;
        //console.log( (n1+n2-Math.abs(n1-n2)) /2);
        for(let j=1+(n1+n2-Math.abs(n1-n2)) /2;j<(n1+n2+Math.abs(n1-n2))/2;j++){

            if(j %2 !=0 ){
                sum+=j;
            }
        }
        console.log(sum);
    }
    

 }

main();