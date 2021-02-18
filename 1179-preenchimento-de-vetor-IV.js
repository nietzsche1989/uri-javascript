const input = ` 12 
-38
-11
61
-2
23
70
62
-79
49
-64
-20
-3
27
69`


var lines = input.split('\n');




function readList(lines,n){
    let list = [];

    for(let i=0; i<n;i++){
        let x = parseInt(lines.shift());
        list[i] = x;
    }//for

    return list;
 }

function printList(list,type){
    for(let i=0;i<list.length;i++){
        console.log(type + '['+ i + '] = '+ list[i]);
    }
}


 function main(){        
   let n = 15;
   var even = [];
   var odd = [];
   let contEven = 0; 
   let contOdd = 0;

   for(let i = 0;i<n;i++){
       let number = parseInt(lines.shift());
       //console.log(number);
       
       if(number % 2 == 0){
         even[contEven] = number;
         contEven++;
         if(contEven == 5){
            printList(even,'par');
            contEven = 0;
            even = [];
         }  
       }    
       else{
        odd[contOdd] = number;
        contOdd++;
        if(contOdd == 5){
           printList(odd,'impar');
           contOdd = 0;
           odd = [];  
        }
       }
   }
   printList(odd,'impar');
   printList(even,'par');
}

   
 main();


/*
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.EPSILON);
    console.log(Number.MIN_SAFE_INTEGER);
    console.log(Number.MAX_VALUE);
    console.log(Number.isSafeInteger(999999123430000));
    console.log(Math.fround(99999912343000007654329925.7865));
    var yourString = sprintf("%.2f", 9999991234.7865);
    console.log(yourString); 
    */   