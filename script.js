console.log('deu certo')
let btntroca = document.querySelector('.btn-remover')

btntroca.onclick = () => {
  let btnremover = document.querySelector('.container-login')
  btnremover.setAttribute('class', 'remove')
  console.log('deu certo')
  trocaTexto()
  trocatela()
}

function trocaTexto() {
  let text = document.querySelector('.group')
  text.innerHTML = 'Não tem uma conta? Cadastre-se'
}

function trocatela() {
  let novatela = document.querySelector('.inseri-email')
  novatela.style.display = 'flex'
}
