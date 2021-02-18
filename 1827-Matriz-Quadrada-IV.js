const input = `5
11`


var lines = input.split('\n');


 
 function readMatrix(n,m){
    let matrix = [];
    let numbers = [];
    //console.log(matrix);
    for(let i=0;i<n;i++){
        numbers = [];
        for(let j=0;j<m;j++){
            numbers.push(0);
            //numbers.push(parseFloat(lines.shift()));
             //console.log(numbers[j]);
        }
        matrix.push(numbers);
    }
    return matrix;
 }
 
 function printMatrix(matrix,n,m){

    for(let i=0;i<n;i++){
        string = '';
        for(let j=0;j<m;j++){
            string = string + matrix[i][j];
        }    
        console.log(string);

    }
   
 }

 function addNumber(matrix,n,m){
    let tam =Math.trunc(n/3);
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(i==j)// diagonal primaria
            matrix[i][j] = 2;
        if(j==n-i-1)// diagonal secundaria
            matrix[i][j] = 3;

        if(i>=tam && j>=tam && i<=n-tam-1 && j<=n-tam-1){
            if(i==(n-1)/2 && j ==(n-1)/2){// centro
                matrix[i][j] = 4;
            }
            else
            matrix[i][j] = 1;
        }
        }
    }
    

    return matrix;

 }

 function main(){        

    let n = parseInt(lines.shift());
    
    while(n){
        let matrix = readMatrix(n,n);
    
    
    
        matrix = addNumber(matrix,n,n);
        //console.log(matrix);
        printMatrix(matrix,n,n);
        console.log();
        
        n = parseInt(lines.shift()); 

 
    }
    


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


    
function readList(lines,n){
    let list = [];

    lines= lines.shift().split(' ');
    for(let i=0; i<n;i++){
        let x = parseInt(lines[i]);
        list[i] = x;
    }//for

    return list;

 }




 function printList(list,type){
    for(let i=0;i<list.length;i++){
        console.log(type + '['+ i + '] = '+ list[i]);
    }
}
    */   