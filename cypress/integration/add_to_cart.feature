Feature: Eu como cliente desejo adicionar itens da lista de produtos no carrinho.

  I quero usar o carrinho

  Scenario: Adicionar itens no carrinho e verificar na pagina de carrinho
    Given o usuário faz o login
    When o usuário clica em Add to Cart para os itens desejados
    And navego para página do carrinho
    Then o item adicionado deve estar visível



  Scenario:Adicionar itens no carrinho e verificar na navbar
    Given o usuário faz o login
    When o usuário clica em Add to Cart para os itens desejados
    Then o item deve ser adicionado ao ícone da navbar

  Scenario: Visualizar um item específico e adicioná-lo ao carrinho
    Given o usuário faz o login
    And o usuário clica em um item aleatório