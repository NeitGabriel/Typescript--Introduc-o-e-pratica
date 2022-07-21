// let valores = any;

// valores = 3;
// valores = 'patod';

// let valoresString : string = 'teste';
// valoresString = valores;

//tipos e valores personaliozados

function somaValores(input1: number | string, input2: number | string){
    if(typeof input1 === 'string' || typeof input2 === 'string'){
        return input1.toString() + input2.toString();
    }else{
    return input1 + input2;
    }
}

console.log(somaValores(1,5));
console.log(somaValores('H3lLo', 13));
console.log(somaValores('Oh','My'));

//para garantir que os valores do parametros estão corretos, devemos inserir qual o tipo de cada parametro, e QUAL o tipo deseja retornar... isso pode ser feito assim funcao(a: tipo, b: tipo): tipo{funcao}

function somatoTipo(input1: number, input2: number): number{
    return input1+input2//.toString();
}

console.log(somatoTipo(2,3));

function printaNum(numero1: number, numero2: number): void{
    console.log(numero1+numero2)
}

printaNum(4, 3);


function ToMacth(numero1: number, numero2: number, callback:(numero: number)=> number): number{
    let result = numero1 + numero2;
    return callback(result);
}


function aoQuadrado(numero: number){
    return numero*numero;
}
function division(numero: number){
    return numero / numero;
}

console.log(ToMacth(1,3,aoQuadrado));
console.log(ToMacth(1,3,division));

let anyEstaDeVolta: any;

anyEstaDeVolta = 3;
anyEstaDeVolta = 'A';
anyEstaDeVolta = 3;

let stringTest: string = 'Verificado';
stringTest = anyEstaDeVolta;

//O teste acima foi validado, porque o any aceita qualquer tipo em seu escopo sem se preocupar se ele é ou não aqle tipo. com isso, qualquer tipo de teste o aceita mesmo que naquele momento ele NÃO SEJA O TIPO ESPERADO.


let unknownValue : unknown;
unknownValue = 'A';
unknownValue = 3; 

//stringTest = unknownValue;



if(typeof unknownValue === 'string'){
    stringTest = unknownValue;

}

//Agora, para o unknown isso não ocorre, sempre que for feita uma validação com ele, é necessario fazer um typeof. 

function jogaErro(erro: string, codigo: number): never{
    throw {error: erro, code: codigo};
}
jogaErro('Teste', 787637);

console.log(ToMacth(1,3,division));