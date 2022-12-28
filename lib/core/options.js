const { program } = require('commander')

const helpOptions = () => {
  program.option('-t, --target <value>', 'target file')
  program.option('-o, --out-file <value>', 'out file')
}

module.exports = helpOptions