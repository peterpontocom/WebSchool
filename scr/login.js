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