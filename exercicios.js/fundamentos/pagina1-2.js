//Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.
const cumprimentar = (nome) => {
    console.log(`Olá, ${nome}!!!`)
}

cumprimentar('ana')

//Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
const diasDeVida = (anos) => {
    console.log (anos * 365)
}

diasDeVida(25)

//Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$X", em que X é o quanto o funcionário ganhou no mês.
const Calcsalario = (horas, valorHora) => {
    let salario = horas * valorHora;
    console.log(`Salário igual a R$${salario}`)
}

Calcsalario(180, 60) 



//Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
const mes = (num) => {
    switch(num){
    case 1:
        console.log("janeiro");
        break;
    
    case 2: 
        console.log("fevereiro")
        break;

    case 3: 
        console.log("março")
        break;

    case 4: 
        console.log("abril")
        break;
    
    default:
        console.log('O número deve estar entre 1 e 12')
}
}

mes(0)

//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
const maiorQue = (num1, num2) => {
    if (num1 > num2){
        console.log (`${num1} é maior do que ${num2}`);
    } else {
        console.log(`${num2} é maior que ${num1}`)
    }
}

maiorQue (5, 7)

//Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".


/* Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo. */

/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação. */

/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado. */

/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro. */

/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array: */

/* Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam
cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro. */