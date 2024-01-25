let bilangan = 0;


let pow = Math.pow(bilangan, 2);
bilangan = Math.sqrt(pow) === Math.floor(Math.sqrt(pow)) ? Math.sqrt(pow) : Math.ceil(Math.sqrt(pow));


let sqrt = Math.sqrt(40 + bilangan);
sqrt = Math.sqrt(sqrt) === Math.floor(Math.sqrt(sqrt)) ? Math.sqrt(sqrt) : Math.ceil(Math.sqrt(sqrt));


let max = Math.max(bilangan, 2.3, 8.5);
max = Math.max(max) === Math.floor(Math.max(max)) ? Math.floor(max) : Math.ceil(max);

console.log(bilangan);