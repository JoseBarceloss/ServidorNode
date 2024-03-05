# Meu Primeiro Servidor Node.js 🚀

![GIF](https://static.wixstatic.com/media/33dac1_413fc06da72742ea85bacffa58330fab~mv2.gif)

Este é o meu primeiro exercício prático de criação de um servidor Node.js! Neste projeto, aprendi como criar um servidor básico usando Node.js e Express, e explorei diferentes conceitos, como rotas, query strings, parâmetros de rota, corpo da solicitação (request body), e códigos de status HTTP. Além disso, utilizei a extensão Thunder Client no Visual Studio Code para testar as rotas e verificar as respostas do servidor.

## Tecnologias Utilizadas

- **Node.js:** Plataforma para execução de código JavaScript no servidor.
- **Express:** Framework web para Node.js que simplifica o desenvolvimento de aplicativos web e APIs.
- **Nodemon:** Utilizado para reiniciar automaticamente o servidor sempre que um arquivo for modificado durante o desenvolvimento.
- **Thunder Client:** Extensão para o Visual Studio Code que permite testar e debugar APIs diretamente no editor.

## Como Usar

1. **Instalação do Node.js:** Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
   
2. **Instalação de Dependências:** No diretório raiz do projeto, execute o seguinte comando para instalar as dependências necessárias:

    ```
    npm install
    ```

3. **Execução do Servidor:** Para iniciar o servidor, execute o seguinte comando:

    ```
    npm run dev
    ```

4. **Testando as Rotas:** Utilize a extensão Thunder Client no Visual Studio Code para enviar solicitações HTTP para as rotas disponíveis e visualizar as respostas.

---

## Funcionalidades Implementadas

- **GET /:** Rota principal que retorna uma mensagem de boas-vindas.
- **GET /search:** Rota que processa consultas de pesquisa.
- **GET /people/:id/:name:** Rota que utiliza parâmetros de rota para recuperar informações específicas.
- **POST /tasks:** Rota para criar tarefas, aceitando dados no formato JSON.
- **GET /teams:** Rota que retorna uma lista de equipes.
- **POST /teams:** Rota para adicionar uma nova equipe à lista.
- **PUT /teams/:id:** Rota para atualizar uma equipe existente com base no ID.
- **DELETE /teams/:id:** Rota para excluir uma equipe com base no ID.

---
## ⚠️ Aviso

Caso a porta 3002 esteja ocupada por algum aplicativo, você pode modificar a constante `port` no arquivo `src/server.js` para uma porta disponível.

Observação: Geralmente, meus repositórios de exercícios no GitHub têm o prefixo "EX" antes do nome. No entanto, neste projeto, optei por não incluir esse prefixo para facilitar a visualização e identificação dos avaliadores.

Por fim, considero este conteúdo de extrema importância para quem está iniciando no desenvolvimento back-end, pois oferece uma base sólida para compreender como criar e interagir com um servidor, além de explorar conceitos fundamentais para o desenvolvimento de APIs e aplicativos web.

---

<div align="center">
  <p>🚀 Agradeço pela oportunidade de compartilhar este exercício! Espero que tenham gostado! 🚀</p>
  <img src="https://i.pinimg.com/originals/aa/48/46/aa4846d84035bb97903a10edfe0f22e9.gif" alt="GIF2" style="max-width: 250px;">
</div>

