function ganjilGenap(platNomor) {
    if (typeof platNomor === 'number') {
      
        if (platNomor % 2 !== 0) {
            return "Ganjil";
        } 

        else {
            return "Genap";
        }
    } else {
        return "Input bukan angka";
    }
}

console.log(ganjilGenap(7)); 
console.log(ganjilGenap(10)); 
console.log(ganjilGenap("abc")); 