const input = `3
1 1
2 8
8 2`


var lines = input.split('\n');



    function main(){        

        
        let cont= parseInt(lines.shift());;
        
        while(cont > 0){
            cont--;
            let string =  lines.shift();
            string = string.split(' ');
            let r1 = parseInt(string[0],10), 
            r2 = parseInt(string[1],10);
            console.log(r1+r2);
            
        }//while
    }//main
    
    main();