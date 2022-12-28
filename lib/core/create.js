const { program } = require('commander')
const repoConfig = require('../config/repo_config')
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
const { handleOutFile, handleTargetFile } = require('./actions')
const options = program.opts()
const log = require('../utils/log')

const createCommands = () => {
  program
    .command('compress')
    .action(async () => {
      const text = await handleTargetFile(options.target)
      handleOutFile(options.outFile, text)
    })

  program
    .command('create <type> [projectName]')
    .action(async (type, projectName) => {
      log.hint(`正在拉取${type}的模板，请稍等...`)
      // 从仓库克隆项目
      await download(repoConfig[type], projectName, { clone: true })
      log.hint(`项目拉取成功`)
    })
}

module.exports = createCommands