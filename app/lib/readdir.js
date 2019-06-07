const fs = require('fs')
/**
 * 
 * @param map to call only once and add as object of any type
 */

function readdir (map , path, dir, cat) {
  fs.readdir(path, (err, files) => {
    if (err) console.error(err)
    // finds every file with extension .js in folder
    let file = files.filter(f => f.split('.').pop() === 'js')

    if (file.length <= 0) {
      console.log('No CMDS')
      return
    }

    console.log(`Loaded ${file.length} ${cat}`)

    for (const cmdfile of file) {
      console.log(`${cmdfile} loaded`)
      let executable = require(dir + cmdfile)

      map.set(executable.help.name, executable)
    }
  })
}

module.exports = readdir
