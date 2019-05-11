const collection = require('./../utils/Collection')

module.exports = async (fs) => {
    fs.readdir('./src/cmd/', (err, files) => {
        if(err) console.error(err);

        let file = files.filter(f => f.split(".").pop() === "js");

        if(file.length <= 0) {
            console.log("No CMDS")
            return
        }

        console.log(`Loads ${file.length} CMDS`);

        for (const cmdfile of file) {
            const command = require(`./../cmd/${cmdfile}`)
            console.log(`${cmdfile} loaded`)

            collection.set(command.name, command)
        }
    })
}
