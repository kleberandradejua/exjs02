function check(){
    var data = new Date()
    var ano = data.getFullYear()
    var year = document.getElementById('txtano')
    var res = document.getElementById('result')

    if(year.value.length == 0 || Number(year.value > ano)){
        alert('[ERRO] Verifique os dados e tente novamente')               
    }else{
        var sex = document.getElementsByName('sexo')
        var img = document.getElementById('imagem')
        var idade = ano - Number(year.value)
        var gender = ''
        if(sex[0].checked){
            gender = "Homem"        
            if(year.value < 10){            
                img.setAttribute('src', '../img/menino.jpeg')
            }else if(year.value < 30){
                img.setAttribute('src', '../img/jovem-h.jpg')
            }else if(year.value < 60){
                img.setAttribute('src', '../img/adulto.jpg')
            }else{
                img.setAttribute('src', '../img/wasted.jpeg')
            }
        }else if(sex[1].checked){
            gender = "Mulher"        
            if(year.value < 10){            
                img.setAttribute('src', '../img/menina.jpeg')
            }else if(year.value < 30){
                img.setAttribute('src', '../img/jovem-m.jpg')
            }else if(year.value < 60){
                img.setAttribute('src', '../img/adulto.jpg')
            }else{
                img.setAttribute('src', '../img/velha.jpg')
            }
        }         
    }
    res.innerHTML = `Detectou ${gender} com ${idade} anos`
}