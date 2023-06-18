// Preenche login

/*
function preencherLogin() {
  var nome = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;
  var login = nome.toLowerCase() + "." + sobrenome.toLowerCase();

  document.getElementById("login").value = login;
} 
*/

// Preenche login
//* Impeça que espaços em banco façam parte do login.

function preencherLogin() {
  var nomeInput = document.getElementById("nome");
  var sobrenomeInput = document.getElementById("sobrenome");
  var loginInput = document.getElementById("login");

  var nome = nomeInput.value.trim().toLowerCase().replace(/\s/g, '');
  var sobrenome = sobrenomeInput.value.trim().toLowerCase().replace(/\s/g, '');
  var login = nome + "." + sobrenome;

  loginInput.value = login;
}

  // Preenche os dados do endereço
function preencherEndereco(dados) {
    document.getElementById('endereco').value = dados.logradouro;
    document.getElementById('bairro').value = dados.bairro;
    document.getElementById('cidade').value = dados.localidade;
    document.getElementById('estado').value = dados.uf;
  }
  
  // Exibi mensagem de erro
  function exibirErro() {
    document.getElementById('cep-erro').classList.remove('d-none');
  }
  
  // Limpa os campos de endereço
  function limparEndereco() {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
  }
  
  // Manipulador do evento de entrada do CEP
  function handleCepInput() {
    const cepInput = document.getElementById('cep');
    const cepValue = cepInput.value.replace(/\D/g, '');
  
    if (cepValue.length === 8) {
      // Limpa a mensagem de erro
      document.getElementById('cep-erro').classList.add('d-none');
  
      // Faz a solicitação para obter os dados do endereço
      fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
        .then(response => response.json())
        .then(data => {
          if (data.erro) {
            // Se o CEP não foi encontrado, ele exibi mensagem de erro
            limparEndereco();
            exibirErro();
          } else {
            // Preenche os campos de endereço
            preencherEndereco(data);
          }
        })
        .catch(error => {
          console.log(error);
          limparEndereco();
          exibirErro();
        });
    } else {
      // Se o CEP não for válido, ele limpa os campos de endereço
      limparEndereco();
    }
  }
  
  // Esse código está adicionando um ouvinte de evento (addEventListener) para capturar as mudanças de valor no campo de CEP e executar a função handleCepInput quando essas mudanças ocorrerem.
  document.getElementById('cep').addEventListener('input', handleCepInput);

  // Obs.: no html, no label cep foi alterado o tipo para text e inserido o maxlength="8" para limitar a quantidade de caracteres em 8 dígitos, com o tipo number não funciona.

  // Atualiza os campos da tabela com os dados do formulário
function atualizarTabela() {
    // Obtem os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    const cep = document.getElementById('cep').value;
    const endereco = document.getElementById('endereco').value;
    const complemento = document.getElementById('complemento').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const github = document.getElementById('github').value;
    const academia = document.getElementById('academia').value;
    const professor = document.getElementById('professor').value;
    const termos = document.getElementById('termos').value;
    const infoOpcao = document.querySelector('input[name="info"]:checked').value;

  
    // Atualiza os campos da tabela com os valores obtidos
    document.getElementById('t-nome').textContent = nome;
    document.getElementById('t-sobrenome').textContent = sobrenome;
    document.getElementById('t-email').textContent = email;
    document.getElementById('t-login').textContent = login;
    document.getElementById('t-senha').textContent = senha;
    document.getElementById('t-cep').textContent = cep;
    document.getElementById('t-endereco').textContent = endereco;
    document.getElementById('t-complemento').textContent = complemento;
    document.getElementById('t-bairro').textContent = bairro;
    document.getElementById('t-cidade').textContent = cidade;
    document.getElementById('t-estado').textContent = estado;
    document.getElementById('t-github').textContent = github;
    document.getElementById('t-academia').textContent = academia;
    document.getElementById('t-professor').textContent = professor;
    document.getElementById('t-termos').textContent = termos;
    document.getElementById('t-info').textContent = infoOpcao;
  }
  
  // Adiciona manipulador de evento para o envio do formulário
  document.getElementById('formulario').addEventListener('submit', function(event) {
    // Evita o comportamento padrão de enviar o formulário
    event.preventDefault();
  
    // Chama a função para atualizar os campos da tabela
    atualizarTabela();
  
    // Exibi a tabela de dados e ocultar o formulário
    document.getElementById('tabela-dados').classList.remove('d-none');
    document.getElementById('formulario').classList.add('d-none');
  });
