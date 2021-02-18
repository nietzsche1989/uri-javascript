const input = `10 10 2`


var lines = input.split('\n');



function main(){

    string = lines.shift();    
    string = string.split(' ')
    a = parseInt(string[0]);
    b = parseInt(string[1]);
    c = parseInt(string[2]);
    let r = ':(';

    if(b < a){//temperatura caiu no segundo dia
        if(c >= b){// temperatura subiu no terceiro dia
            r = ':)';
        }
        if(c < b){// temperatura caiu no terceiro dia
            if(b-c < a-b) r = ':)';
        }
    }

    if(b > a){//temperatura subiu no segundo dia
        if(c > b){// temperatura subiu no terceiro dia
            if(c-b >= b - a) r = ':)';
        }
    }

    if(a==b){// temperatura constante
        if(c > b){//temperatura subiu no segundo dia
            r = ':)';
        }
    }

    console.log(r);

}


main();