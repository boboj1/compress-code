const { program } = require('commander')

const createCommands = require('./lib/core/create')
const helpOptions = require('./lib/core/options')

helpOptions()
createCommands()

program.parse(process.argv)