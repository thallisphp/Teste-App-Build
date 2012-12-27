contar = (atual, elemento, maximo = 10) ->
    # console?.log? "contar (#{atual} < #{maximo})"
    # console?.log? $ elemento
    if atual <= maximo
        setTimeout ->
            elemento.width "#{atual}%"
            contar atual+1, elemento, maximo
        ,500

redirecionar = ->
    setTimeout ->
        window.location = window.location.href
    ,2000

$ ->
    setTimeout ->
        header = $ 'header h1'
        elemento = $ '#progresso'
        
        header.append ' CoffeScript funcionando'
        
        contar 0, elemento, 100

    ,2000
