function parOuImpar() {
    let numero = parseInt( window.prompt("Digite um número") )

    let resultado = document.querySelector("section#resultado")
    if(numero%2 == 0){
        resultado.innerHTML = `<p>O número ${numero} que foi digitado é PAR</p>`
    } else {
        resultado.innerHTML = `<p>O número ${numero} que foi digitado é ÍMPAR</p>`
    }
}