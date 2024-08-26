let campoA = parseFloat(document.getElementById('campoA').value);
let campo  = parseFloat(document.getElementById('campoB').value);

if (campoB > campoA) {
    console.log("Campo B e maior que o Campo A")
} else {
    console.log("Campo B nao e maior que o Campo A")
}

document.getElementById('form-campo').addEventListener('submit', function(e) {
    e.preventDefault();

    let campoA = parseFloat(document.getElementById('campoA').value);
    let campoB = parseFloat(document.getElementById('campoB').value);
    let mensagemSucesso = "Formulario enviado com sucesso! Campo B maior que o Campo A."

    if (campoB> campoA) {
        document.querySelector('.success-message').innerText = mensagemSucesso;
        document.querySelector('.error-message').style.display = 'none'
    } else {
        document.querySelector('.error-message').innerHTML = "O valor B precisa ser maior que o Valor A!"
        document.querySelector('.error-message').style.display = 'block'
        document.querySelector('.success-message').style.display = 'none';
    }
});