// var square = (x) => {
//     var result = x*x;
//     return result };
// console.log(square(9));
// var user = {
//     name:'andrew',
//     sayHi:()=>{
//         console.log(`Hi...I'm ${this.name}`);
//         console.log(arguments);
//     },
//     sayHiAlt(){
//         console.log(arguments);
//         console.log(`Hi...I'm ${this.name}`);
//     }};
// user.sayHi();
// user.sayHiAlt();
// user.sayHiAlt(1,2,3,4);
// user.sayHi(1,2,3,4);

const yargs = require('yargs');

const argv = yargs.argv;

console.log(argv);

command = process.argv[2];
if (command==='add'){
    console.log('ADD')
} else if(command=== 'del'){
    console.log('DEL')
} else if (command === 'list'){
    console.log('LIST')
}else{
    console.log('invalid')
}