const navbar = document.querySelector(".btn-group-vertical")
navbar.style['flexDirection'] = 'row'
navbar.style['gap'] = '0.25rem'


const navbarChild = navbar.querySelectorAll(".btn")
Array.from(navbarChild).map(btn =>{
    btn.style['border-radius'] = '0.25rem';
    btn.style['width'] = 'auto';
})

const header = document.querySelector(".jumbotron")
header.style["background-color"] = "var(--secondary)"
header.style["color"] = "var(--white)"
header.style["text-align"] = "right"

const headerButton = header.querySelector('a')
headerButton.classList.remove('btn-primary')
headerButton.classList.add('btn-success')

const cards = document.querySelectorAll(".row")[2]
const cardItem = cards.querySelectorAll(".col-lg-3")
const orderCard = [cardItem[3], cardItem[0], cardItem[2], cardItem[1]]
const cardButton = orderCard[1].querySelector(".btn")
cardButton.classList.remove("btn-primary")
cardButton.classList.add("btn-success")
const containerTitle = cards.querySelector(".col-lg-12")
cards.innerHTML = containerTitle.outerHTML.concat(orderCard.map(card => card.outerHTML).join(""))


const list = document.querySelector(".list-group")
let newItens = ["Quarto item", "Quinto item"].map(item => {
  const newLi = document.createElement("li")
  newLi.className = "list-group-item"
  newLi.innerHTML = item
  return newLi
})
const itensList = document.querySelectorAll(".list-group-item")
const newList = [...itensList, ...newItens]
newList[0].classList.remove('active')
newList[3].classList.add('active')
list.innerHTML = newList.map(item => item.outerHTML).join('')