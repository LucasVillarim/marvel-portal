# MARVEL Portal

O desafio foi desenvolvido em ReactJS fazendo uso de algumas libs externas apenas para complementar e auxiliar em certas atividades. Sobre o design, o mesmo foi idealizado por mim, inspirado no próprio site da Marvel, já que todo o conteúdo da API deve ser linkado de volta para eles, faz sentido seguir uma linha parecida de design.


# Link da aplicação

https://startling-cannoli-ef5267.netlify.app/home


## Arquitetura

Como o React dá a liberdade para que o próprio desenvolvedor idealize sua estrutura, a aplicação inicializada pelo create-react-app e está planejada da seguinte forma:

![Screenshot_1](https://user-images.githubusercontent.com/48375103/165870668-ca641288-85f9-402d-b6f2-465fa2f1fcaa.png)

- [pages] -> onde ficam os componentes de página.
- [components] -> componentes auxiliares e abstração de código.
- [routes] -> sistema de rotas utilizando o react-router-dom.
- [services] -> instância do axios para realizar requests.
- [context] -> gerenciamento de estados da aplicação.
- [utils] -> pasta para comportar funções auxiliares (não houve necessidade, porém a pasta seria útil caso fosse um projeto real, por isso mantive).

## Gerenciamento de estados

Por se tratar de uma aplicação simples, o React Context é mais que suficiente. Para suprir a necessidade de acesso aos dados da API em diferentes pontos da aplicação, foi escolhido focar as requisições no contextAPI, assim logo ao iniciar/entrar na landing page, os dados são requisitados e guardados em states separados por categorias referentes ao que foi pedido no desafio, dados dos heróis, criadores, eventos e quadrinhos.

Por fim, se torna possível acessar esses dados de forma global na aplicação, evitando fazer requisições desnecessárias para o tamanho do app, gerando assim um ganho de performance em certos pontos.

## Páginas e SPA

Como os dados tem uma estrutura muito semelhante, foi possível utilizar apenas um componente para tratar dados diferentes, deixando a aplicação mais dinâmica, por exemplo, os dados de heróis, quadrinhos, criadores e eventos, compartilham do mesmo componente de página, podendo ser alternado sem ter que haver um novo "render".

## Componentização

Há um "mix" assim pode-se dizer, em certos pontos, para poupar tempo e haver eficiência foi feito um código mais grosso, hardcoded, o que facilitou o desenvolvimento e permitiu mantêr o foco em outras funcionalidades da aplicação. Já em pontos que essa facilidade se tornou nociva para a legibilidade e clareza de código, foi realizado a componentização, retirando-se assim, boas cargas do mesmo, em alguns casos reduzindo a quantidade de linhas pela metade. Como por exemplo, a geração de "cards" sequênciais, que pode ser visto em vários pontos da aplicação.

![Screenshot_3](https://user-images.githubusercontent.com/48375103/165873548-dd36646e-3d9d-4452-b2e8-3d0827b759d0.png)

O header e o footer foram componentizados para permanecer visíveis em todas as rotas, são aqueles típicos componentes globais.

## Mecanismo de busca

Existe uma simples searchBar localizada no canto superior direito da tela. A mesma foi idealizada de forma a trazer todos os dados que foram recolhidos nos "requests" que ficam no context. A API da Marvel não disponibiliza um endpoint global, logo a solução foi após finalizar todos os "requests", realiza-se um merge dos "arrays" trazidos, gerando assim uma lista gigante contento todos os dados.

## Dependências

- md5 -> para hash
- react-coutdown -> componente de contador
- axios -> requisições
- eslint -> fiscalização de código

 ## Versão
 
 ReactJS 18, NodeJS 16.

