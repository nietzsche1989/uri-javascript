
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `TUDO77 MA]IUSC[ULO@@}}
`


var lines = input.split('\n');


/********************************************* */


function main(){
    let n =  lines.length;
    let string = lines.shift();
    let i=0;

    while(string){
        
        let m=true;
        let stringD='';
        for(let j=0;j<string.length;j++){
            let c = string[j];
            
            if(c===' ' || c< 'A' || c>'z' || (c>'Z' && c<'a')){
                stringD = stringD + c;
                //console.log(c);
            }
                else
                if(m){
                    stringD = stringD + c.toUpperCase();
                    m=false;
                }
                    else{
                        stringD = stringD + c.toLowerCase();
                    m =true;
                }
        }

        console.log(stringD);
        string = lines.shift();
    }
}

 main();

