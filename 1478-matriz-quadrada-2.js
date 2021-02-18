const input = `1
2
100
0`


var lines = input.split('\n');


 
 function readMatrix(lines,n,m){
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

            if(matrix[i][j]<10){
                if(j==0){
                    string = string + '  ' + matrix[i][j];
                }
                else{
                    string = string + '   ' + matrix[i][j];
                }
                
            }
            else{
                if(j==0){
                    if(matrix[i][j] < 100 ){
                        string = string + ' ' + matrix[i][j];
                    }
                    if(matrix[i][j] >=100 ){
                        string = string + matrix[i][j];
                    }
                }
                if(j!=0 && matrix[i][j] >=100 ){
                    string = string + ' ' + matrix[i][j];
                }
                if(j!=0 && matrix[i][j] < 100 ){
                    string = string + '  ' + matrix[i][j];
                }

            }
        }
        console.log(string);

    }
    console.log();
   
 }

 function addOne(matrix,n,m,p){
    
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(i==j){
                matrix[i][j] = 1;
            }
            else{
                matrix[i][j] = Math.abs((i-j))+1; 
            }
        }
    }
    

    return matrix;

 }

 function main(){        

    let n = parseInt(lines.shift());
    while(n != 0){
        let matrix = readMatrix(lines,n,n);
    
    
    
        matrix = addOne(matrix,n,n,0);
        //console.log(matrix);
        printMatrix(matrix,n,n);
        
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