var colorR = ['red','rgb(58, 20, 20)']
var colorY = ['yellow','rgb(71, 71, 20)']
var colorG = ['green','rgb(15, 49, 15)']

function trocarCor() {

    // Acessando as lampadas do sinal
    var red = document.getElementsByClassName('red')[0]
    var yellow = document.getElementsByClassName('yellow')[0]
    var green = document.getElementsByClassName('green')[0]

    if(red.style.background == 'red') {
        //apagando o vermelho e acendendo o amarelo
        red.style.background = colorR[1]
        yellow.style.background = colorY[0]
    } else if (yellow.style.background == 'yellow'){
        //apagando o amarelo e acendendo o verde
        yellow.style.background = colorY[1]
        green.style.background = colorG[0]
    } else {
        //apagando o verde e acendendo o vermelho
        green.style.background = colorG[1]
        red.style.background = colorR[0]
    }
}