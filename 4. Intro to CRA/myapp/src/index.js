import foods from './foods';
import {choice, remove} from './helpers'

let food = choice(foods)
console.log(`I'd like one ${food}, please.`)
console.log(`Here you go: ${food}, please.`)
console.log('Delicious! May I have another?')
let remainingFoods = remove(foods, food)
console.log(`I'm sorry, we are all out. We have ${remainingFoods.length} others foods left.`)
