function inserirElemento(){
    // capturando valor
    let input = window.document.getElementById('new-element')
    let text = input.value

    // teste lógico para inserir texto 
    if (text != '') {
        let container = window.document.getElementById('container')
        let p = document.createElement('p')
        p.innerText = text
        container.appendChild(p)
    }
    console.log(input.value)
}