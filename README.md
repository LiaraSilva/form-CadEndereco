# Formulário de Endereço

## Descrição do projeto

O projeto visa criar um formulário de cadastro de endereço intuitivo e eficiente, que permita aos usuários inserir, atualizar e gerenciar suas informações de localização de forma simples e rápida. O formulário será utilizado em uma plataforma online, facilitando a coleta de dados necessários para entregas, correspondências e comunicações.

## Limpar consulta do form já realizada

<img src= "l.png">

### const limparFormulario = () =>
* usando a sintaxe de arrow function. Essa função não recebe parâmetros.

###  document.getElementById('Rua').value = '';document.getElementById('Bairro').value = '';document.getElementById('Cidade').value = '';document.getElementById('Estado').value = '';
* o elemento HTML com o ID Rua e define seu valor (value) como uma string vazia (''). Isso limpa o campo de entrada correspondente.

## Verrifica se o CEP é valido e Verifica o tamanho do CEP

<img src= "i.png">

## const eNumero = (numero) => /^[0-9]+$/.test(numero);
* const: 
Declara uma constante, ou seja, uma variável cujo valor não pode ser alterado após sua inicialização.
* eNumero: 
É o nome escolhido para essa constante. Você pode escolher qualquer nome válido para uma variável.
* (numero) =>:
Essa parte define uma função arrow function. Uma arrow function é uma forma mais concisa de escrever funções em JavaScript.
* /^\[0-9\]+$/: 
É uma expressão regular (regex). Expressões regulares são padrões que podem ser usados para encontrar correspondências em strings.
* .test(numero): É um método do objeto RegExp (expressão regular) que verifica se a string passada como argumento corresponde à expressão regular. Retorna true se houver correspondência e false caso contrário.

## const cepValido = (cep) => cep.length == 8 && eNumero(cep);
* const: 
Define uma constante, ou seja, uma variável cujo valor não pode ser alterado após sua inicialização.
* cepValido:
É o nome dado a essa constante, escolhido para representar a função que verifica a validade de um CEP.
* cep:
Define um parâmetro da função, que representa o valor do CEP que queremos validar.
* =>:
Indica que estamos definindo uma função arrow function, uma forma mais concisa de escrever funções em JavaScript.
* cep.length == 8: 
Verifica se o comprimento da string cep é igual a 8. Um CEP válido no Brasil possui exatamente 8 dígitos.
* &&: 
É o operador lógico "e". Significa que ambas as condições à esquerda e à direita do operador devem ser verdadeiras para que o resultado final seja verdadeiro.
* eNumero(cep): 
Chama a função eNumero (que você já definiu anteriormente) passando o valor do CEP como argumento. Essa função, como você explicou, verifica se todos os caracteres do CEP são números