const input = `M
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144`


var lines = input.split('\n');


 
 function readMatrix(lines,n,m){
    let matrix = [];
    let numbers = [];
    //console.log(matrix);
    for(let i=0;i<n;i++){
        numbers = [];
        for(let j=0;j<m;j++){
             numbers.push(parseFloat(lines.shift()));
             //console.log(numbers[j]);
        }
        matrix.push(numbers);
    }
    return matrix;
 }



 function main(){        

    //console.log(l);
    let t = lines.shift();
    let n = 12;
    let m = 12;
    let matrix = readMatrix(lines,n,m);
    
    let cont=0;
    let result = 0;
    for(let i =1; i<n; i++){
        //console.log('i= '+ i); 
        for(let j = 0; j<i; j++){
            //console.log('j= '+j);    
            result += matrix[i][j];
            cont++;
            //console.log(j);
            //console.log(matrix[i][j]);
        }
    }
    
    if(t == 'S'){
        console.log(result.toFixed(1)); 
    }
    else{
        console.log((result/cont).toFixed(1));
    }


}

   
 main();


/*
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.EPSILON);
    console.log(Number.MIN_SAFE_INTEGER);
    console.log(Number.MAX_VALUE);
    console.log(Number.isSafeInteger(999999123430000));
    console.log(Math.fround(99999912343000007654329925.7865));
    var yourString = sprintf("%.2f", 9999991234.7865);
    console.log(yourString); 


    
function readList(lines,n){
    let list = [];

    lines= lines.shift().split(' ');
    for(let i=0; i<n;i++){
        let x = parseInt(lines[i]);
        list[i] = x;
    }//for

    return list;

 }




 function printList(list,type){
    for(let i=0;i<list.length;i++){
        console.log(type + '['+ i + '] = '+ list[i]);
    }
}
    */   