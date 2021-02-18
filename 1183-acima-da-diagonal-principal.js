const input = `M
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1`


var lines = input.split('\n');

function readMatrix(lines,n,m){
    let matrix = [];
    let numbers = [];
    //console.log(matrix);
    for(let i=0;i<n;i++){
        numbers = [];
        for(let j=0;j<m;j++){
             numbers.push(parseFloat(lines.shift()));
             //console.log(numbers[j]);
        }
        matrix.push(numbers);
    }
    return matrix;
 }



 function main(){        

    //console.log(l);
    let t = lines.shift();
    let n = 4;
    let m = 4;
    let matrix = readMatrix(lines,n,m);
    
    let cont=0;
    let result = 0;
    for(let i =0; i<n; i++){
        //console.log('i= '+ i); 
        for(let j = i+1; j<m; j++){
            //console.log('j= '+j);    
            result += matrix[i][j];
            cont++;
            //console.log(j);
            //console.log(matrix[i][j]);
        }
    }
    
    if(t == 'S'){
        console.log(result.toFixed(1)); 
    }
    else{
        console.log((result/cont).toFixed(1));
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