const alunasGama = ["Paula", "Maria", "Estela", "Clara"]


//acessar informaçoes num array
console.log(alunasGama[0]) //paula

// Operador Spread (...) incluir item
const alunasXp = [...alunasGama, "Brendo"]

console.log(alunasXp)

// Metodos de iteração

for (let i = 0; i < alunasXp.length; i++) {
    console.log(alunasXp[i])
}

// metodos de iteração de array
//1 - map retorna uma novo array sem alteraro array original
// criando uma copia com as alteraçoes que desejamos.

const alunas = ["Paula", "Maria", "Estela", "Clara"]

alunas.map(aluna => console.log(aluna))

//2- Filter: retorna um novo array com os elementos filtrados

const numeros = [34, 35, 67, 90, 55, 76]

const numerosImpares = numeros.filter(numero => numero % 2 != 0)

console.log(numerosImpares)

//3- find - encontra e retorna o primeiro elemento
// que achar igual ao elemento passador por parâmetro.
const produtos = ["geladeira", "fogão", "cama", "mesa"]

const encontraCama = produtos.find(produto => produto === "cama")
console.log(encontraCama)


//4- sort - ordena array
const num = [34, 45, 76, 90, 55, 110]

const crescente = num.sort((a, b) => a - b)
console.log(crescente)
