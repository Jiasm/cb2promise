'use strict'

var cb2promise = require('../')
var fs = require('fs')

var newFs = cb2promise(fs, {}, ['readFile', 'writeFile'])

newFs.writeFile('./message.md', 'hello jarvis').then(err => {
  err ? console.error(err) : console.log('success')
})

newFs.readFile('./message.md').then((data) => {
  console.log(data.toString())
})
