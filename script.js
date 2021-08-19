function calcular() {
    let input = document.querySelector("#inputNumero");
    let numero = Number(input.value);
    let resultado = 0;
    if (Number.isInteger(numero) && numero > 0) {
        for (let index = 3; index < numero; index++) {
            resultado += verificarDivisibilidade(index);
        }
        avisoAtivar(`O Resultado foi: ${resultado}`, "sucesso");
    } else {
        avisoAtivar("Por favor, digite um numero inteiro e positivo", "erro");
    }
}

function avisoAtivar(texto, opcao) {
    let aviso = document.querySelector("#info");
    switch (opcao) {
        case "sucesso":
            aviso.classList.add("alert-success");
            break;
        case "erro":
            aviso.classList.add("alert-danger");
            break;
        default:
            aviso.classList.add("alert-secondary");
            break;
    }
    aviso.innerHTML = texto;
    aviso.style.display = "block";
}

function verificarDivisibilidade(numero) {
    if ((numero % 3) == 0) {
        return numero;

    } else if ((numero % 5) == 0) {
        return numero;
    }
    return 0;
}