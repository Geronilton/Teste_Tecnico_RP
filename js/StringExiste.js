// 2) Escreva um programa que verifique, em uma string,
//  a existência da letra ‘a’, seja maiúscula ou minúscula, 
//  além de informar a quantidade de 
// vezes em que ela ocorre.

let cont = 0;

const entrada = prompt("Informe uma palavra")

function verificaString (str){
    for (let i = 0; i < str.length; i++){
        if (str[i] === 'a'){
            cont++;
        }
    }
    console.log(`Quantidade de vezes que a letra A aparece: ${cont}`)
    return cont;
}
verificaString(entrada);
