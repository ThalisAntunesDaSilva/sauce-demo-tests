Feature: Eu como cliente desejo finalizar uma compra do meu carrinho


  Scenario: Fazer o checkout dos itens que quero comprar
    Given o usuário faz o login
    When o usuário clica em Add to Cart para os itens desejados
    And navego para página do carrinho
    And clico em checkout
    And preencho minhas informações
    Then checo as informações da compra
    And o sistema me retorna agradecendo a compra

  Scenario: Fazer o checkout porém não preencher informações
    Given o usuário faz o login
    When o usuário clica em Add to Cart para os itens desejados
    And navego para página do carrinho
    And clico em checkout
    And não preencho minhas informações
    Then deve aparecer uma mensagem de erro ao preencher informações

  Scenario: Cancelar o checkout
    Given o usuário faz o login
    When o usuário clica em Add to Cart para os itens desejados
    And navego para página do carrinho
    And clico em checkout
    And preencho minhas informações
    And clico em cancelar
    Then devo ir para a home







