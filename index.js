var btn = document.getElementById("btn")
var span = document.getElementById("especificacoes")


function counter() {

    if(document.getElementById("value").value == 63) {
        
        btn.style.display = "none"
        span.style.display = "block"
        document.getElementById("value").style.display = "none"
            
        var teste = "63 - Potiguara \n\n Rio De Janeio - Ilha do Governador \n\n Endereço: ACM - RUA MALDONADO, 55 - RIBEIRA"

        span.innerText = teste
        
    } else if(document.getElementById("value").value == 18) {

        btn.style.display = "none"
        span.style.display = "block"
        document.getElementById("value").style.display = "none"
            
        var teste = "18 - Aurélio Azevedo Marques \n\n Rio De Janeio - Ilha do Governador \n\n Endereço: AV. PARANAPUÃ, 204 - FREGUESIA"

        span.innerText = teste

    } else if(document.getElementById("value").value == 57) {

        btn.style.display = "none"
        span.style.display = "block"
        document.getElementById("value").style.display = "none"
            
        var teste = "57 - Capitão Lemos Cunha \n\n Rio De Janeio - Ilha do Governador \n\n Endereço: ESTRADA DO GALEÃO, s/n - GALEÃO"

        span.innerText = teste

    } else if(document.getElementById("value").value == 77) {

        btn.style.display = "none"
        span.style.display = "block"
        document.getElementById("value").style.display = "none"
            
        var teste = "77 - Uirapuru \n\n Rio De Janeio - Ilha do Governador \n\n Endereço: RUA ERICO COELHO, 252 - TAUÁ"

        span.innerText = teste

    } else if(document.getElementById("value").value == 51) {

        btn.style.display = "none"
        span.style.display = "block"
        document.getElementById("value").style.display = "none"
            
        var teste = "51 - Bis \n\n Rio De Janeio - Ilha do Governador \n\n Endereço: R. SESSENTA E NOVE, 42 - GALEÃO"

        span.innerText = teste

    }

}