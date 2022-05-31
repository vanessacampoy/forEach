//forEach
const lista = ["morango", "maça", "banana", "melancia"]
const body = document.querySelector('body')

function adicionarBody(item) {
  body.innerHTML += "<li>" + item + "</li>"
  console.log(item)
} 

lista.forEach(adicionarBody)

//querySelectAll
