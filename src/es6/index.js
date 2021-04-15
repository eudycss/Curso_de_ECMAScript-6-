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