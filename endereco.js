'use strict'; // Ativa o modo restrito
// Código para consumo de API da ViaCEP
//https://viacep.com.br/


// Limpar consulta do form já realizada
const limparFormulario = () =>{
    document.getElementById('Rua').value = '';
    document.getElementById('Bairro').value = '';
    document.getElementById('Cidade').value = '';
    document.getElementById('Estado').value = '';
}

// Verrifica se o CEP é valido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
// Verifica o tamanho do CEP
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

// Função para preencher campos relacionados ao CEP
const preencherformulario = (endereco) =>{
    document.getElementById('logradouro').value = endereco.logradouro;
// Coloca o valor de legradouro de API dentro do campo logradouro de formulário
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}

// Função para consumo de API ViaCEP
const pesquisaCep = async() =>{
    limparFormulario
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url);
    }else{

    }
}