const { program } = require('commander')

const createCommands = require('./lib/create')
const helpOptions = require('./lib/options')

helpOptions()
createCommands()

program.parse(process.argv)

// const options = program.opts()
// if (options.target) console.log(options)