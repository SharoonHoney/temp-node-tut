// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//first approach
// const {john , peter} = require('./4-names')
// second approach
const names = require('./4-names')
const sayHi = require('./5-utils')
const data  = require('./6-alternative-flavor')

require('./7-mind-grenade')

// console.log(data.singlePerson.name)
// console.log(names)

// sayHi('susan')
// by first approach
// sayHi(john)
// sayHi(peter)
// by second approach
// sayHi(names.john)
// sayHi(names.peter)
