function calcula_media(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3

    if (media >= 7) {
        return 'aprovado'
    }

    if (media >= 5 && media < 7) {
        return 'Recuperação'
    }
    if (media < 5) {
        return'Reprovado'
    }

}

console.log(calcula_media(2, 2, 2))