const input = `10
40 10 10 10 15 18 20 15 11 10
10
1 5 2 9 5 5 8 4 4 3
10
19 9 1 4 5 8 6 11 9 7`


var lines = input.split('\n');



 function main(){        

    
    let n= parseInt(lines.shift());
    while(n){
        let v=  lines.shift().split(' ');
        let vmax = parseInt(v[0],10);
        for(let i=1;i<n;i++){
            if(parseInt(v[i],10) >vmax){
                vmax = parseInt(v[i],10);
            }
        }

        if(vmax<10){
            console.log('1');
        }
        if(vmax>=10 && vmax<20){
            console.log('2');
        }
        if(vmax>=20){
            console.log('3');
        }
        n= parseInt(lines.shift());;
    }//while
    

}//main
   
 main();