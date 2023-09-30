function inserirTarefa(){
    
    // capturando valor
    let input = window.document.getElementById('new-element')
    let text = input.value
    let br = document.createElement('br')

    // teste lógico para inserir texto 
    if (text != '') {
        let container = window.document.getElementById('container')
        let checkbox = document.createElement('input')
        let label = document.createElement('label')
                
        checkbox.setAttribute('type','checkbox')
        checkbox.setAttribute('name',text)
        
        label.setAttribute('for',text)  
        label.innerText = text      

        container.appendChild(checkbox)
        container.appendChild(label)
        container.appendChild(br)
    }
    console.log(text)
}

function concluirTarefa() {
    let form = document.getElementById('container')
    console.log(form.children)
}