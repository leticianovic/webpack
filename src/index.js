import './style.scss'

function titleComponent() {
    const elemH1 = document.createElement('h1')
    
    elemH1.innerHTML = 'Hello World, Letícia!'
    elemH1.classList.add('title')

    return elemH1
}

document.body.appendChild(titleComponent())