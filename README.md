<h1>Projeto Repositório de códigos com autenticação (Login e senha)</h1><br>
<a href="https://repository-code.vercel.app/">Visualizar Projeto</a><br>
*O site pode demorar um pouco para fazer o login (tempo necessário para iniciar o servidor).<br>
*Cadastrar um usuário e senha novo ou utilizar -> login: teste@teste.com.br / senha: secret<br><br>

Funcionalidades implementadas:
- Página inicial com login (com autenticação no banco de dados)
- Página de Cadastro de novo usuário
- Página Editor de Código com opção de salvar projetos
- Highlight do código escrito a partir da escolha da linguagem
- Página de projetos salvos com listagem e exclusão de projetos
- Barra de pesquisa de projetos funcional

--------------------------------------------------------------------------------
Adição de funcionalidades ao projeto AluraChallenge.

Tecnologias utilizadas nesse projeto:
- React JS
- Node JS
- MongoDB (Atlas)
- Express
- Axios
- Highlight JS
- Cors
- BCryptJS
- JWT...

--------------------------------------------------------------------------------

Passo a passo para visualização do projeto

- Clonar o repositório usando o comando:
    git clone https://github.com/EtorLucca/RepositoryCode-SPA.git

- Usar um cluster MongoDB já criado ou Criar um cluster no MongoDB - Atlas com:
    - Username e password de sua preferência
    - Endereço de IP Atual

- Ainda no MongoDB, conectar a sua aplicação ao cluster:
    <img src="./public/img/clusterconnect.jpg">
    <img src="./public/img/connectapp.jpg">

- Copiar a uri fornecida:
    <img src="./public/img/uri.jpg">

- Criar na pasta server um arquivo .env com o seguinte texto:
      
 
      MONGODB_URI=
      APP_SECRET=
     
    
    - Colar a uri copiada no passo anterior

      <code>MONGODB_URI=uricopiadaaqui</code>

    -Substitua <code>`<password>`</code> pela senha cadastrada na hora da criação do cluster

    - Criar uma sting forte (pode ser usado geradores de string) e inserir no app_secret:<br>
      <code> exemplo: APP_SECRET=abc123 </code>

- Abra um terminal do VS Code na pasta server e digite o comando:<br>
    <code> npm run dev </code><br>
  ou <br>
    <code> yarn dev </code><br><br>

- Abra um terminal do VS Code na pasta server e digite o comando:<br>
    <code> npm install </code><br>
  ou<br>
    <code> yarn add </code><br><br>
  para instalar todos as dependencias<br>

- Abra um terminal do VS Code na pasta web e digite o comando:<br>
    <code> npm install </code><br>
  ou<br>
    <code> yarn add </code><br><br>
  para instalar todos as dependencias<br>

- Após a instalação dos pacotes digite o comando:<br>
    <code> npm start </code><br>
  ou<br>
    <code> yarn start </code><br><br>

O VS Code irá abrir o navegador com o site rodando
      
- Cadastrar um usuário na página de cadastro e ultilizar esse usuário para fazer login no sistema.
