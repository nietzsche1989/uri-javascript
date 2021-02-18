
const input = `--*
--*
--*
caw caw
*--
*--
caw caw
--*
*--
caw caw`


var lines = input.split('\n');



function converter_bin_dec(string){
    let number = 0;
    number = parseInt(string[0])*2*2;
    number = number + parseInt(string[1])*2;
    number = number + parseInt(string[2])*1;

    return number;
}


function main(){ 
    

    for(let j=0; j<3;j++){

        let sum=0;
        let string = lines.shift();

        while(string !== 'caw caw'){
            
            let string2 = '';
            
            for(let i=0;i<3;i++){
                if(string[i] === '-'){
                    string2 = string2 + '0';
                }
                else{
                    string2 = string2 + '1';
                }
            }//for

            
            sum = sum + converter_bin_dec(string2);

            string = lines.shift();
        }
        console.log(sum);

    }



}


main();