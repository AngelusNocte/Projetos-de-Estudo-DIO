
// solucao 1
function verificaPalidromo(string) {
    if(!string) return "String Inexistente";

    string.split("").reverse().join(" ") === string;

} 
console.log(verificaPalidromo("ovo"));

// solução 2

function verificapalindromo2(string){
    if (!string) return "string inexistente";
    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) { 
            return false;
        }
    }

    return true;
}

console.log (verificapalindromo2 ("ovo"));
