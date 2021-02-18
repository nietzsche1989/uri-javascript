const input = `10
1 2 3 4 -5 6 7 8 9 10`


var lines = input.split('\n');


function readList(lines,n){
    let list = [];

    lines= lines.shift().split(' ');
    for(let i=0; i<n;i++){
        let x = parseInt(lines[i]);
        list[i] = x;
    }//for

    return list;
 }



 function main(){        

    let n = parseInt(lines.shift());
    let list = readList(lines,n);
    //console.log(lines);
    //console.log(list);
    let  lowest = list[0];
    let position = 0;
    for(let i = 0;i<n;i++){
       if(lowest > list[i]){
           lowest = list[i];
           position = i;
       }
    }
    console.log('Menor valor: '+lowest);
    console.log('Posicao: '+position);
    
}

   
 main();


/*


function printList(list,type){
    for(let i=0;i<list.length;i++){
        console.log(type + '['+ i + '] = '+ list[i]);
    }
}

    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.EPSILON);
    console.log(Number.MIN_SAFE_INTEGER);
    console.log(Number.MAX_VALUE);
    console.log(Number.isSafeInteger(999999123430000));
    console.log(Math.fround(99999912343000007654329925.7865));
    var yourString = sprintf("%.2f", 9999991234.7865);
    console.log(yourString); 
    */   