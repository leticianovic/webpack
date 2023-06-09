import './style.scss'
import img from './note-ti.jpg'

function rootStyle() {
    const elemRoot = document.getElementById('root')
    elemRoot.classList.add('container')
}

function titleComponent() {
    const elemH1 = document.createElement('h1')
    
    elemH1.innerHTML = 'Bem-vindos, amigos! Vocês são amigos!'
    elemH1.classList.add('title')

    return elemH1
}

function imageComponent() {
    const elemImg = new Image(1200,800)

    elemImg.src = img

    return elemImg
}

rootStyle()
document.body.appendChild(titleComponent())
document.body.appendChild(imageComponent())