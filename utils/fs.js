const fs = require('fs')

function listDirectories(path = process.cwd()) {
  return fs.readdirSync(path)
}

function doesFileExists(path) {
  return fs.existsSync(path)
}

module.exports = {
  listDirectories,
  doesFileExists,
}
