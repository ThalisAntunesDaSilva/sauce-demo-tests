Feature: Eu como cliente desejo adicionar itens da lista de produtos no carrinho.

  I quero usar o carrinho

  Scenario: Adicionar itens no carrinho e verificar na pagina de carrinho e navbar
    Given o usuário faz o login
    When o usuário clica em Add to Cart para os itens desejados
    And navego para página do carrinho
    Then o item adicionado deve estar visível
    And o item deve ser adicionado ao ícone da navbar

  Scenario: Visualizar um item específico e adicioná-lo ao carrinho
    Given o usuário faz o login
    And o usuário clica em um item aleatório
    When o usuário ve o item e click em Add to Cart
    And navego para página do carrinho
    Then o item adicionado deve estar visível
    And o item deve ser adicionado ao ícone da navbar

  Scenario: Não adicionar itens no carrinho e verificar na pagina de carrinho
    Given o usuário faz o login
    And navego para página do carrinho
    Then o item adicionado não deve estar visível
    And o item não deve estar adicionado ao ícone da navbar

  Scenario: Adicionar itens à lista de produtos no carrinho e depois removê-los
    Given o usuário faz o login
    When o usuário clica em Add to Cart para os itens desejados
    And o usuário remove os itens
    And navego para página do carrinho
    Then o item adicionado não deve estar visível
    And o item não deve estar adicionado ao ícone da navbar

