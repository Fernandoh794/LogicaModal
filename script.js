const button = document.querySelector('.button');
const modal = document.querySelector('.modal-content')
const close = document.querySelector('.close')


const AbrirModal = () => {
modal.classList.add('modal-active')



}


button.addEventListener('click', AbrirModal)


const fecharModal = () => {
modal.classList.remove('modal-active')
    
}

close.addEventListener('click', fecharModal)


