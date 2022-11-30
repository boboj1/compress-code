const fs = require('fs')
const path = require('path')
const babel = require('@babel/core')
const { minify } = require('terser')
const { checkFileType } = require('../utils/file')

const babelOption = {
  presets: ['@babel/preset-env']
}

const handleTargetFile = async (target) => {
  if (checkFileType(target) === '.js') {
    const targetFile = path.resolve(process.cwd(), target)
    const targetContent = fs.readFileSync(targetFile, 'utf8')
    const babelContent = babel.transformSync(targetContent, babelOption).code
    const result = await minify(babelContent)
    return result.code
  } else if (checkFileType(target) === '.css') {
    console.log(1)
  }
}

const handleOutFile = (outFile, content) => {
  const outPath = path.resolve(process.cwd(), outFile)
  fs.writeFileSync(outPath, content)
}

module.exports = {
  handleTargetFile,
  handleOutFile
}