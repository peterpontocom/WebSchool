function alunoShow(){
    let opp = window.document.querySelector('.opp').style.display = 'none'
    let alunoForm = window.document.querySelector('.aluno-form').style.display = 'flex'
}

function professorShow(){
    let opp = window.document.querySelector('.opp').style.display = 'none'
    let professororm = window.document.querySelector('.professor-form').style.display = 'flex'
}

function escolaShow(){
    let opp = window.document.querySelector('.opp').style.display = 'none'
    let escolaForm = window.document.querySelector('.escola-form').style.display = 'flex'
}
/* Aluno Site */
function wrongAluno(){
    let photo = window.document.querySelector('#profolio')
    let nomF = window.document.querySelector('.first-input')
    let nomS = window.document.querySelector('.second-input')
    let erro = window.document.querySelector('.erro')
    
    if(nomF.value == 0 || nomS.value == 0){
        erro.style.opacity = '1'
        erro.innerHTML = 'Preencha os dados'
    }

}

/* Professor Site */

function wrongProfessor(){
    let photo = window.document.querySelector('#profolio')
    let nomF = window.document.querySelector('.first-input-professor')
    let nomS = window.document.querySelector('.second-input-professor')
    let erro = window.document.querySelector('.erroP')
    
    if(nomF.value == 0 || nomS.value == 0){
        erro.style.opacity = '1'
        erro.innerHTML = 'Preencha os dados'
    }

}

/* Escola Site */

function wrongEscola(){
    let erro = window.document.querySelector('.erroE')  
    let nomF = window.document.querySelector('.first-input-escola')
    if(nomF.value == 0){
        erro.style.opacity = '1'
        erro.innerHTML = 'Preencha o dado'
    }

}

function photoEscola() {
    let photo = window.document.querySelector('.profolio-escola')
    let nomF = window.document.querySelector('.first-input-escola')
    let nomS = window.document.querySelector('.second-input-escola')

    if(nomF.value == 'Árvore da Felicidade'){
        photo.style.borderRadius = '5px'
        photo.src = '../img/arvorefeliz.png'
    }

    else if(nomF.value == 'ITEL') {
        photo.style.borderRadius = '80px'
        photo.src = '../img/itel.jfif'
    }

    else {
        photo.src = '../img/1144760.png'
    }
}