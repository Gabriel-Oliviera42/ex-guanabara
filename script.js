function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        alert('erro')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto2.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto4.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto6.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto8.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto1.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto3.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto5.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto7.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos'
        res.appendChild(img)
    } 
}
