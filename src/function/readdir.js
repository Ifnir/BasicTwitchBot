
class Func {
  readdir (fs, map) {
    fs.readdir('./src/cmd/', (err, files) => {
      if (err) console.error(err)

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
}

module.exports = new Func()
