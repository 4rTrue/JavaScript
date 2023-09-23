function exibeMensagem() {
    alert('olá, mundo!');

    const name = prompt('Informe seu nome: ');
    const name_confirm = confirm(`Seu nome é ${name}?`);

    if (name_confirm) {
        alert('Nome confirmado!');
    } else {
        alert('Nome não confirmado!')
    }
}