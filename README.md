# Teste Técnico Compasso

Este é um projeto desenvolvido para servir de teste técnico para a vaga de Desenvolver Frontend na empresa Compasso. O projeto foi desenvolvido usando HTML, CSS3, CSS Module, BEM e React.

## Sumário

- [Como iniciar](#como-iniciar)
- [O que eu utilizei nesse app](#o-que-eu-utilizei-nesse-app)
- [Como eu organizei esse código](#como-eu-organizei-esse-codigo)
- [Features que não consegui implementar](#bugs-e-features-que-nao-consegui-implementar)
- [Considerações finais](#consideracoes-finais)

## Como iniciar

Você vai precisar realizar o download e instalar o [NPM](https://nodejs.org/en/) ou [Yarn](https://yarnpkg.com/pt-BR/) para conseguir rodar a aplicação.

#### Faça a clonagem desse repositório

`git clone https://github.com/wallmartins/teste-tecnico-compasso`

#### Entre na pasta do projeto

`cd teste-tecnico-compasso`

### Instale todas as dependências

`npm install`

ou

`yarn`

#### Rode o projeto

`npm start `

ou

`yarn start`

Por padrão, o acesso a aplicação está configurado para abrir em [http://localhost:3000](). Se você quiser mudar a porta na qual abrirá o projeto, basta rodar o programa abaixo:

`CVA_PORT=[PORT_VALUE] npm start`

ou

`CVA_PORT=[PORT_VALUE] yarn start`

## O que eu utilizei nesse app

#### React e React Hooks

O uso da biblioteca React foi para desenvolver todo o core da aplicação, criando todos os componentes que a compõe. Dentre os Hooks, os principais foram useState e useEffect.

#### React Router DOM

Fiz uso da ferramenta para poder desenvolver as rotas da aplicação. A partir dele é possível desenvolver toda a parte de rota e comunicação entre os componentes da aplicação.

#### CSS Module e BEM

Fiz a escolha pelo CSS Module, por conta dele evitar os choques com classes e ficar muito mais fácil de você localizar qual css está sendo aplicado na hora de debugar um código. Em uma aplicação pequena, pode ser que ter essa funcionalidade não seja de tão grande adianto ou ajuda, mas quando pensa que a aplicação pode escalar e tornar-se gigante, ter facilidade em encontrar qual arquivo css está atuando naquele ponto específico e ir direto onde está o possível problema facilita bastante o desenvolvimento. Para além disso, o uso do BEM foi para criar uma padronização de nomenclatura e compreensão do código, tanto olhando para os componentes e entendendo a estrutura só pelas classes ou também de entender pelo CSS que componente é aquele e onde ele está sendo utilizado.

## Como eu organizei o código

Desenvolvi o código criando pastas por funcionalidade/finalidade:

- **Components**: contém todo o conteúdo relacionado aos componentes e os componentes em si, separados em pasta onde cada um tem relação com o outro;
- **Pages**: contém todas as páginas que compõe o corpo da aplicação, cada qual identificada com o seu nome;
- **Routes**: contém o arquivo routes com todas as rotas da aplicação definidas ali;
- **Helper**: contém um componente de erro para ser usado como um auxiliador mesmo dentro de toda a aplicação no momento de exibir uma mensagem de erro, dessa forma mantém uma padronização para isso. A ideia por trás da pasta helper é conter componentes que são auxiliares e não fazem parte, de fato, do corpo de toda aplicação, mas que só aparecem em momentos necessários e podem ser para toda a aplicação como um auxiliar;
- **Api**: é o local onde vai conter as funções de requisição para o banco. No caso dessa aplicação só tem um arquivo de request, pois todas são requests do tipo GET, então não haveria problema de agrupá-las. No entanto, em uma aplicação mais complexa seria interessante criar vários arquivos separados por obrigações, por exemplo: Login, Usuários, Produtos e afins;

Comentando um pouco mais sobre a organização dos arquivos e nomenclaturas, principalmente na pasta de components. Todos os arquivos que são um componente possui um arquivo de css próprio, onde eu prefiro escolher seguir o padrão de colocar o nome do arquivo com o nome do componente que vou usar, por exemplo, Form e, o nome do arquivo de styles, utilizando o nome form.module.css. A escolha por esse padrão de organização vem por acreditar que, caso o projeto escale para algo muito grande, torna-se muito mais fácil achar esse componente e o seu arquivo de estilo, apenas procurando pelo nome dele.

## Features que não consegui implementar

- A parte de persistência dos dados do usuário quando navegada até a página dele, colocando o seu nome de usuário na url do projeto. Tem algumas formas de fazer a persistência desses dados, seja usando o LocalStorage ou o Redux para poder criar algum estado de persistência do mesmo, entretanto, acabou que não consegui desenvolver no tempo para entrega do teste, infelizmente. No fluxo da aplicação, você consegue acessar toda e qualquer informação sobre aquele usuário sem precisar mudar de página, seja os repositórios dele próprio ou os que ele mais acessa, entretanto, se mudar de usuário, não consegui desenvolver uma forma de voltar para os dados do usuário anterior sem que uma nova pesquisa seja feita. Caso seja muito necessário e acreditarem que vale a pena me dar mais uma chance, com mais um dia de prazo acredito que consigo implementar essa funcionalidade.

## Considerações Finais

- Um dos maiores desafios que encontrei com esse teste foi realizar a autenticação do Github. Nunca tinha utilizado essa parte da API deles, então foi um desafio imenso compreender como funcionava, realizar toda a configuração e conseguir dar conta dela no final. Desenvolver esse Auth foi bem interessante para poder compreender também mais sobre esse processo de usar uma conta de terceiros para dar acesso a aplicação, o que se torna bem interessante, visto que esses métodos de autenticação tem sido bastante utilizados na Web atualmente.
- No mais, eu gostei bastante da realização do teste, foi bem divertido poder realizá-lo e interagir com a API do Github. Acredito que não consegui deixar com o design mais agradável de todos, mas o tempo que tive para realização do teste, infelizmente, acabou não me permitindo desenvolver a parte de design com tanto esmero quanto eu gostaria. Agradeço bastante pela oportunidade de participação no processo seletivo.
