

const input = `2200
1020
2022
2002`


var lines = input.split('\n');




/********************************************* */


function main(){
  
    let string =  lines.shift();

    while(string !== "2002"){
        console.log('Senha Invalida')
        string =  lines.shift();
    }
    console.log('Acesso Permitido');
}
   

 main();

