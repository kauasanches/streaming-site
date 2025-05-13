function logar() {
    var Login = Document.getElementById('login').value;
    var Senha = Document.getElementById('senha').value;

    if (login=="admin" && senha=="admin") {
        alert("Sucesso!");
        location.href="home.html"
    } else {
        alert("Usuário ou senha incorretos!");
    }
}