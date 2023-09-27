function inserirElemento(){
    
    // capturando valor
    let input = window.document.getElementById('new-element')
    let text = input.value

    // teste lógico para inserir texto 
    if (text != '') {
        let container = window.document.getElementById('container')
        let div = document.createElement('div')
        div.className = 'element'
        div.innerText = text
        container.appendChild(div)
    }
    console.log(input.value)
}