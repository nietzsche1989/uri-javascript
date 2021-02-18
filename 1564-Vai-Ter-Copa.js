const input = `1
1
1
2
100
1`


var lines = input.split('\n');



 function main(){        

    let n= parseInt(lines.shift());
    let cont=0;
    while(n >=0){
        cont++;
        if(n==0){
            console.log('vai ter copa!');
        }
        else{  
            console.log('vai ter duas!');
        }

        n= parseInt(lines.shift());
    }//while
}//main
   
 main();