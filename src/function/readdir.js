const fs = require('fs')
/**
 * 
 * @param map to call only once and add as object of any type
 */

function readdir (map) {
  fs.readdir('./src/cmd/', (err, files) => {
    if (err) console.error(err)
    // finds every file with extension .js in folder
    let file = files.filter(f => f.split('.').pop() === 'js')

    if (file.length <= 0) {
      console.log('No CMDS')
      return
    }

    console.log(`Loads ${file.length} CMDS`)

    for (const cmdfile of file) {
      console.log(`${cmdfile} loaded`)
      let command = require(`./../cmd/${cmdfile}`)

      map.set(command.help.name, command)
    }
  })
}

module.exports = readdir
