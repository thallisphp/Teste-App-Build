$ ->
    setTimeout ->
        header = $ 'header h1'
        header.append ' XD'
        setTimeout ->
            window.location = window.location.href
        ,2000
    ,2000
