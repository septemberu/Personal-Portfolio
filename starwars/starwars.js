import { films } from '../Data/films.js'
import {people} from '../Data/people.js'

console.log("Hi there! My first JavaScript Code!")

console.log(document.querySelector('.greeting'))

let greetingDiv = document.querySelector('.greeting')

greetingDiv.textContent = "Star Wars Cast" 

let castList = document.createElement("ul")

let counter = 1

people.forEach(person => {
    let nameItem = document.createElement("li")
    nameItem.textContent = person.name 
    castList.appendChild(nameItem)
    let personImg = document.createElement("img")
    personImg.src = `https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`
    greetingDiv.appendChild(personImg)
    counter++
})

greetingDiv.appendChild(castList)