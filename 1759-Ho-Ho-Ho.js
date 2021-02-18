const input = `5`


var lines = input.split('\n');



 function main(){        

    
    let cont= parseInt(lines.shift());;
    let string = '';
    while(cont >= 0){
        cont--;
        if(cont==0){
            string = string + 'Ho';
        }
        if(cont>=1){
            string = string + 'Ho ';
        }
        if(cont==0){
            string = string +'!';
        }
        
    }//while
    console.log(string);

}//main
   
 main();