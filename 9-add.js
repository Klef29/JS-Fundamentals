const arg1 = parseInt(process.argv[2]);
const arg2 = parseInt(process.argv[3]);

function add(numb1, numb2){
    return numb1 + numb2;
}

let sum = add;
console.log(sum(arg1, arg2));
