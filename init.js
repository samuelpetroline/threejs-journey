const Parcel = require('@parcel/core').default
const yargs = require('yargs/yargs')
const { listDirectories, doesFileExists } = require('./utils/fs')

function mapArgToFolder(arg) {
  return exerciseFolders.find((folder) => folder.includes(arg))
}

const args = yargs(process.argv.slice(2)).argv
const exerciseFolders = listDirectories('./exercises')
const mappedFolder = mapArgToFolder(args.e || args.exercise)

if (!mappedFolder) {
  throw new Error('Invalid exercise')
}

const exerciseEntryFile = `./exercises/${mappedFolder}/index.html`

if (!doesFileExists(exerciseEntryFile)) {
  // For some reason you cant interpolate string on Error constrcuctor
  const message = `No \"index.html\" found on ${mappedFolder}`
  throw new Error(message)
}

console.log(` ---- WATCHING FOLDER \"${exerciseEntryFile}\" ----   `)

const bundler = new Parcel({
  entries: exerciseEntryFile,
  defaultConfig: '@parcel/config-default',
  serveOptions: {
    port: 3000,
  },
  hmrOptions: {
    port: 3000,
  },
})

console.log(` ---- live URL on: localhost:3000 ----   `)

bundler.watch()
