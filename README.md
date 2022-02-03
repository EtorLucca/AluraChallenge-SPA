PROJETO AINDA EM CONSTRUÇÃO!!!

Funcionalidades já implementadas:
- Página inicial com login (com autenticação no banco de dados)
- Página de Cadastro de novo usuário (com stepper)
- Página Editor de Código com opção de salvar projetos 
- Página da comunidade com listagem de projetos salvos
- Barra de pesquisa funcional

Ainda falta:
- Correção da aplicação de Highlight no editor de código.



--------------------------------------------------------------------------------
Adição de funcionalidades ao projeto AluraChallenge.

Alura Chalenge SPA, utilizando React JS, node JS e MongoDB.


Tecnologias utilizadas:
- React JS
- Node JS
- MongoDB (Atlas)
- Express
- Axios
- API's diversas

--------------------------------------------------------------------------------

Passo a passo para visualização do projeto

- Clonar o repositório usando o comando:
    git clone https://github.com/EtorLucca/AluraChallenge-SPA.git

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
    <code>
    npm run dev
    </code><br>
  ou <br>
    <code>
    yarn dev <br>
    </code><br>

- Abra um terminal do VS Code na pasta server e digite o comando:<br>
    <code>
    npm install
    </code><br>
  ou<br>
    <code>
    yarn add<br>
    </code><br>
  para instalar todos as dependencias<br>

- Abra um terminal do VS Code na pasta web e digite o comando:<br>
    <code>
    npm install
    </code><br>
  ou<br>
    <code>
    yarn add<br>
    </code><br>
  para instalar todos as dependencias<br>

- Após a instalação dos pacotes digite o comando:<br>
    <code>
    npm start
    </code><br>
  ou<br>
    <code>
    yarn start<br>
    </code><br>

O VS Code irá abrir o navegador com o site rodando
      
- Cadastrar um usuário na página de cadastro e ultilizar esse usuário para fazer login no sistema.
