
const input = `25
papel pedra
papel Spock
papel lagarto
papel tesoura
papel papel
tesoura papel
tesoura lagarto
tesoura pedra
tesoura Spock
tesoura tesoura
pedra tesoura
pedra lagarto
pedra papel
pedra Spock
pedra pedra
lagarto papel
lagarto Spock
lagarto pedra
lagarto tesoura
lagarto lagarto
Spock pedra
Spock tesoura
Spock papel
Spock lagarto
Spock Spock`


var lines = input.split('\n');



 function main(){ 
    
   let n = parseInt(lines.shift());

   for(let i=0;i<n;i++){
        
        let r = '';

        string = lines.shift();    
        string = string.split(' ');

        if(string[0] == 'tesoura' && string[1] =='papel'){//caso #1
            r = 'Bazinga!';
        }
        if(string[0] == 'papel' && string[1] =='pedra'){//caso #2
            r = 'Bazinga!';
        }
        if(string[0] == 'pedra' && string[1] =='lagarto'){//caso #3
            r = 'Bazinga!';
        }
        if(string[0] == 'lagarto' && string[1] =='Spock'){//caso #4
            r = 'Bazinga!';
        }
        if(string[0] == 'Spock' && string[1] =='tesoura'){//caso #5
            r = 'Bazinga!';
        }
        if(string[0] == 'tesoura' && string[1] =='lagarto'){//caso #6
            r = 'Bazinga!';
        }
        if(string[0] == 'lagarto' && string[1] =='papel'){//caso #7
            r = 'Bazinga!';
        }
        if(string[0] == 'papel' && string[1] =='Spock'){//caso #8
            r = 'Bazinga!';
        }
        if(string[0] == 'Spock' && string[1] =='pedra'){//caso #9
            r = 'Bazinga!';
        }
        if(string[0] == 'pedra' && string[1] =='tesoura'){//caso #10
            r = 'Bazinga!';
        }
        if(string[0] == string[1]){//caso #EMPATE
            r = 'De novo!';
        }
        if(r==''){
            r ='Raj trapaceou!';
        }
        
        console.log('Caso #'+ (i+1) +': '+ r);

   }

 }

main();






function read(lines){
    let vector = [];
    let string ='';

    string = lines.shift();

    while(string){

        string = string.split(' ');
        let number = new Number(parseFloat(string[0],10), parseFloat(string[1],10));
        vector.push(number);
        string = lines.shift();
        
    }
   
     return vector;
 }
