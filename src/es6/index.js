function newFuntion(name,age,country){
    var name = name || 'edwin' 
    var age = age || 32
    var country = country || 'EC'
    console.log(namem,age, country)
    
}
//es6
function newFuntion2(name='edwin', age=26, country='Ec'){
    console.log(name,age,country)
}

newFuntion2()
newFuntion2('Sebas',26,'Ot')
// 
let hello='Hello'
let world='World'
let epiPhrase=hello+''+world
console.log(epiPhrase)

let epiPhrase2 = `${hello} ${world}`
console.table(epiPhrase2)

let loren ='Primera fahj khkshsa skashakjshakhskah \n'
+ "otra frase de la primera frase."
let lorem2 = `Esta es otra frase jahksahkjshaksha
esta es linea de salto de linea`

console.log(loren)
console.log(lorem2)

// reestruturacion de elementos
let person={
    'n':'edwin',
    'age': 26,
    'country':'Ec'
}

console.log(person.n, person.age)
let {n, age, country}=person;
console.log(n,age,country)
//operación de propagación

let team1=['Edwin','Julian', 'Andres']
let team2=['Alicia', 'Linda', 'Camila']
let education =['Sebas', ...team1, ...team2]
console.table(education)

//var, let, const

{
 var globalVar='Goblal Var'
}
{
 let globalLet='Global let'
 console.table(globalLet)
}

console.table(globalVar)
//const
let a='b'
a='f'
console.table(a)