console.log("Javascript Carregado");

function validaCPF(cpf){
    if (cpf.length != 11){ //.length mede a quantidade de algarismos
        return false;
    } else {
        var numeros = cpf.substring(0, 9); //.substring a partir de um ponto inicial e um ponto final, vai quebrar o texto e retornar somente oque vc pediu, nesse caso somente 9 caracteres
        var digitos = cpf.substring(9);
        
        var soma = 0;
        for(var i = 10; i > 1; i--){
            soma += numeros.charAt(10 - i) * i;//vai buscar as posições até encontrar alguma coisa, retorna a posição da string na lista
        }
        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11); //o resto da soma dividido por 11 é menor do que 2? Se sim, 0 (representado pelo ?), se não (representado por :), fazer 11 menos o resto da soma dividido por 11;

        //validação do primeiro dígito
        if(resultado != digitos.charAt(0)){
            return false;
        }

        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--){
            soma += numeros.charAt(11 - k) * k;
        }
        
        resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        //validação do segundo dígito
        if (resultado != digitos.charAt(1)){
            return false;
        }

        return true;
    }
}
function validacao(){
    console.log("Iniciando validação CPF");
    document.getElementById("success").style.display = "none";
    document.getElementById("error").style.display = "none";
    
    var cpf = document.getElementById("cpf_digitado").value; //getElementById captura um valor do html e salva em uma variável
    var resultadoValidacao = validaCPF(cpf);
    if (resultadoValidacao == true){
    document.getElementById("success").style.display = "block";
    } else{
        document.getElementById("error").style.display = "block";
    }
}
