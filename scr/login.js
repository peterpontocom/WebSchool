
/*
    Left
*/

function showUpRemove() {
    window.document.getElementsByClassName('.pontos').style.display = 'block'
}

/*
    Right
 */
function show(){
    let pass = window.document.querySelector('#pass')
    let show = window.document.querySelector('.show')
    let hide = window.document.querySelector('.hide')
    pass.setAttribute ('type', 'text')
    show.style.display = 'none'
    hide.style.display = 'inline-block'
}

function hide(){
    let pass = window.document.querySelector('#pass')
    let show = window.document.querySelector('.show')
    let hide = window.document.querySelector('.hide')
    pass.setAttribute ('type', 'password')
    hide.style.display = 'none'
    show.style.display = 'inline-block'
}

function bordaN(){
    let borda = document.querySelector('.input-file')
    let Username = window.document.querySelector('#name')
    let password = window.document.querySelector('#pass')
    if(Username.value == 'Luntala Maria' || Username.value == 'Carla Sole'){
        borda.style.borderBottom = '2px solid #13d644ea'
    }

    else if (Username.value == 0){
        borda.style.borderBottom = "2px solid #2F2E41"
    }

    else{
        borda.style.borderBottom = '2px solid #ff0062'
    }
}

function BordaP(){
    let borda = document.querySelector('.input-file')
    let Username = window.document.querySelector('#name')
    let password = window.document.querySelector('#pass')
    
}