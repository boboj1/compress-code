const { program } = require('commander')

const { handleOutFile, handleTargetFile } = require('./actions')
const options = program.opts()

const createCommands = () => {
  program
    .command('compress')
    .action(async () => {
      const text = await handleTargetFile(options.target)
      handleOutFile(options.outFile, text)
    })
}

module.exports = createCommands