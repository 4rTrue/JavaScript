var tempo = new Date()
var hora = tempo.getHours()
var minuto = tempo.getMinutes()

console.log(`Agora são ${hora}:${minuto} hrs.`)

if (hora < 12 ){
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}