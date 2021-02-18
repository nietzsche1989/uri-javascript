const input = `1
2
3
4
5
0`


var lines = input.split('\n');


function readMatrix(n,m){
    let matrix = [];
    let numbers = [];
    //console.log(matrix);
    for(let i=0;i<n;i++){
        numbers = [];
        for(let j=0;j<m;j++){
            numbers.push(Math.pow(2,i+j));
            //numbers.push(parseFloat(lines.shift()));
             //console.log(numbers[j]);
        }
        matrix.push(numbers);
    }
    return matrix;
 }

 function printMatrix(matrix,n,m){
    let space1 = '' + matrix[n-1][m-1];
    //console.log(space1.length);
    
    for(let i=0;i<n;i++){
        let string = '';
        
        for(let j=0;j<m;j++){
            space2 = '' + matrix[i][j];
            //console.log(space.length - space2.length);
           for(let z=0; z<space1.length-space2.length;z++){
                string = string + ' ';
            }
            if(j==0){
                string = string + matrix[i][j];
            }
            else {
                string = string +' ' + matrix[i][j];

            }
    
        }    
        console.log(string);

    }
   
 }

 function main(){   

          
        let n = parseInt(lines.shift());

        while(n != 0){
        
           
            let matrix = readMatrix(n,n);
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