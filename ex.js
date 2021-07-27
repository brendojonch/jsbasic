function calculaMedia(nota1, nota2, nota3) {

    let media = (nota1 + nota2 + nota3) / 3

    if (media >= 7) {
        return 'aprovado'
    }
    if (media >= 5 && media < 7) {
        return 'recuperação'
    }
    if (media < 5) {
        return 'reprovado'
    }
}
console.log(calculaMedia(8, 5, 8))


