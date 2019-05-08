module.exports = async (fs) => {
    fs.readdir('./lib/cmd/', (err, files) => {
        if(err) console.error(err);

        let file = files.filter(f => f.split(".").pop() === "js");

        if(file.length <= 0) {
            console.log("No CMDS")
            return
        }

        console.log(`Loads ${file.length} CMDS`);

        file.forEach((f, i) => {
            console.log(`${i = 1}: ${f} loaded`)
        })
    })
}

module.exports.conf = {
    name: "readdir",
    info: "read director of commands"
}
