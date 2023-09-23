var my_button = window.document.getElementById('area');
my_button.addEventListener('click', clicar);
my_button.addEventListener('mouseenter', entrar);
my_button.addEventListener('mouseout', sair);

function clicar() {
    my_button.innerText = 'Clicou!';
    my_button.style.background = 'red';
}
function entrar() {
    my_button.innerText = 'Entrou!';
}
function sair() {
    my_button.innerText = 'Saiu!';
    my_button.style.background = 'green';
}