

function registro1(){

    var dataintroduzido = document.getElementById('data-nascimento').value;
    var idade = new Date(new Date() - new Date(dataintroduzido)).getFullYear() - 1970;
    var webPage1 = "bemvindo.html";

    if(idade < 18){
        alert("Não é permitido pessoas com menor de 18 anos")
    }

    else{
        window.location = webPage1;
        
    }

    
            
            

}



