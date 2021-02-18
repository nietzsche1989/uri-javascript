
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `1
AAABBB
AB
BA`


var lines = input.split('\n');


/********************************************* */
function order(string){
    return string.split('').sort().join('')

}


function main(){
    let n =  parseInt(lines.shift());
    

    for(let z=0;z<n;z++){
        
            
        let stringD = lines.shift();
        stringD = order(stringD);
        let string1 = lines.shift() + lines.shift();
        string1 = order(string1);
        stringD = stringD.split('');
        string1 = string1.split('');
        let stringA =stringD.slice();
        let stringB=string1.slice();
        let stringC=string1.slice();
       //console.log(string1);
        
       for(let i =0;i<stringA.length;i++){
           //console.log('***i=' + i);
            for(let j =0;j<string1.length;j++){
                if(stringA[i] ===stringC[j]){
                    //console.log(stringA);
                    //console.log(stringC);
                    stringA.splice(i,1);
                    stringC.splice(j,1);
                    //console.log('i = ' + i);
                    //console.log('j = ' + j);
                   
                    //console.log(stringA);
                    //console.log(stringC);

                    //console.log('*');
                    i--;
                    break;
                }

            }
        }

        for(let i =0;i<stringB.length;i++){
            
            for(let j =0;j<stringD.length;j++){
                if(stringB[i]==stringD[j]){
                    stringB.splice(i,1);
                 
                }
            
            }
        }
        //console.log(stringD.length);
        if(stringB!=0){
            console.log('CHEATER');
        }
        else{
            if(stringD.length==0){
                console.log();
            }
            else
            console.log(stringA.join(''));
        }

    }       
        
}
        

 main();