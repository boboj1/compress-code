const path = require('path')

const checkFileType = (filePath) => {
  return path.extname(filePath)
}

module.exports = {
  checkFileType
}