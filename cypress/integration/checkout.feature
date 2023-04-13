Feature: Eu como cliente desejo finalizar uma compra do meu carrinho


  Scenario: Fazer o checkout dos itens que quero comprar
    Given o usuário faz o login
    When o usuário clica em Add to Cart para os itens desejados
    And o usuário navega para página do carrinho
    And o usuário clica em checkout
    And o usuário preenche as informações
    Then o usuário checa as informações da compra
    And o sistema me retorna agradecendo a compra

  Scenario: Fazer o checkout porém não preencher informações
    Given o usuário faz o login
    When o usuário clica em Add to Cart para os itens desejados
    And o usuário navega para página do carrinho
    And o usuário clica em checkout
    And o usuário não preenche as informações
    Then o sistema deve apresentar uma mensagem de erro ao preencher informações

  Scenario: Cancelar o checkout
    Given o usuário faz o login
    When o usuário clica em Add to Cart para os itens desejados
    And o usuário navega para página do carrinho
    And o usuário clica em checkout
    And o usuário preenche as informações
    And o usuário clica em cancelar
    Then o sistema redireciona para a home







