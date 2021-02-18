
const input = `-3.5
3.5
11.0
10.0
4
1
8.0
9.0
6
6
2`


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
    //console.log(numb);

    
    let i=0;
    do{
    
        let cont =0;
        let sum=0;
        while(cont<2){
            
            let n1=numb[i].num1;
            
            
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
        
        answer = true; 
        console.log('novo calculo (1-sim 2-nao)');
        while(answer){
            
            if(numb[i].num1<1 || numb[i].num1>2){
                console.log('novo calculo (1-sim 2-nao)');
                i++;
            }
            else{
                answer=false;
            }
        }

        if(numb[i].num1==1){
            answer=true;
            i++;
            //console.log(numb[i].num1);
        }
  
    }while(answer);

 }

main();