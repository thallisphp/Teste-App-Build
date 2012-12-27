contar = (atual, elemento, maximo = 10) ->
    console?.log? "contar (#{atual} < #{maximo})"
    if atual < maximo
        setTimeout ->
            elemento.html atual
            contar atual+1, elemento, maximo
        ,500

redirecionar = ->
    setTimeout ->
        window.location = window.location.href
    ,2000

$ ->
    setTimeout ->
        header = $ 'header h1'
        article = $ 'article'
        
        header.append ' CoffeScript funcionando'
        
        contar 0, article, 10

    ,2000
