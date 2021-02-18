const input = `1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20`


var lines = input.split('\n');




/********************************************* */
function readList(lines,n){
    let list = [];

    for(let i=0; i<n;i++){
        let x = parseInt(lines.shift());
        list[i] = x;
    }//for

    return list;
 }


function printList(list,n){
    for(let j=0;j<n;j++){
        console.log('N['+j +'] = ' + list[j]);
    }
}

 function main(){        
    //let x = read(lines);

    let n = 20;
    let list = [];
    
    list = readList(lines,n);

    for(let j=0;j<n/2;j++){
        let aux = list[j];
        list[j] = list[n-j-1];
        list[n-j-1] = aux;
    }
    //console.log(list);

    printList(list,n);


 }//main
   
 main();


