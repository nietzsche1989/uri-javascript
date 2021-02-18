const input = `8 10 20
1 10 100
10 3 100
5 5 25
50 30 89
800 30 10
35 32 1
999 999 99
1000 1000 100
1 1 1
421 213 53
321 634 87
87 424 43
323 535 90
0`


var lines = input.split('\n');


 function main(){   

    let string = lines.shift();
    string = string.split(' ');
    let a = parseInt(string[0]);

    while(a!=0){
        let b = parseInt(string[1]);
        let c = parseInt(string[2]);

        let r = Math.sqrt(a*b*100/c);
        console.log(Math.trunc(r));
        
        string = lines.shift();
        string = string.split(' ');
        //console.log(string);
        a = parseInt(string[0]);
        
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