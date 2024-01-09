// efeito de voltara ao topo

function topo (){
    window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
    )
}

// validação de Login

function login(){
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario == 'admin' && senha == '123456') {
        window.location = "index.html";
        logado = 1;
    }

    if(logado == 0) {
        alert("Login ou senha errado. Tente novamente!");
    }
}

// ativar alert botao cadastrar

    function cadastro() {
        alert("Cadastro feito com sucesso!");
        window.location.href = "index.html"
    }