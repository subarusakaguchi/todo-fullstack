# Todo-Fullstack

Projeto que visa o desenvolvimento de uma simples aplicação Full Stack, utilizando React no front(Client) com Node para a construção do Back(Server).

Utilizei MongoDB como banco de dados, e o DayJs como forma de serviço de controle de datas, outro ponto está na utilização da injeção dependências para evitar acumulação na criação de instancias inativas.

No front utilizer o styled-components, esta decisão foi baseada na ideia de aprendizado pessoal da Tech, e não uma decisão de performance, já que a mesma pesa o sistema se comparado com o simples uso do SASS na aplicação.

Não foram utilizados testes de integração e unitários, isto por não ter sido meu foco em melhorar meus conhecimentos em TDD.

# A Aplicação

![image](https://user-images.githubusercontent.com/50173813/186446463-baf5c254-9b8b-493c-80c1-c6a1e824b4d6.png)

A aplicação funciona com um sistema de contas, na qual é possível criar as mesmas de forma simples em uma tela, e logar em outra, o sistema recebe uma JWT que é registrada em localstorage para evitar que limpeza de cash deslogue o usuário, após entrar no sistema, a mesma gera uma tela na qual pode-se adicionar as tarefas, é possível clicar para concluir as mesmas ou apaga-las, cada "todo" é associada com uma única conta e salva no banco de dados

# Arquitetura

No backend a aplicação foi feita com base em um sistema em módulos, onde por exemplo, as contas representam um módulo, e os tarefas outro módulo, cada um com seus controladores, serviços(Use Cases) e repositórios próprios, demais necessidades como provedores de alguma funcionalidade, configuração de Autenticação, a centralização dos endpoints e as rotas ficam distribuídas entre a pasta de configs e shared.

Outro ponto está na pasta @types onde personalizo alguma das tipagens caso necessário, neste caso, utilizei para adicionar uma tipagem "User" a rota gerado pelo express.

