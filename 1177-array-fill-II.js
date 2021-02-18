const input = `3`


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

    let t = parseInt(lines.shift());
    let list = [];
    let n = 1000;
    
    //list = readList(lines,n);
    let cont=0;
    for(let j=0;j<n;j++){
        list[j] = cont;
        cont++;
        if(cont==t){
            cont=0;
        }
    }
    //console.log(list);

    printList(list,n);


 }//main
   
 main();


