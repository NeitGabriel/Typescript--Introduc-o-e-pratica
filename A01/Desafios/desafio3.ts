let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');
var valorRecorrente = 0;

function somarAoSaldo(soma: number){
    if(campoSaldo){
     valorRecorrente += soma;
        campoSaldo.innerHTML = valorRecorrente.toString();
    }
}

function limparSaldo() {
    if(campoSaldo){
        campoSaldo.innerHTML = '';
     valorRecorrente = 0;
    }
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});
