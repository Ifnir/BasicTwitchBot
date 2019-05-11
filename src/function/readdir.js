
class func {
    readdir(fs, collection) {
        fs.readdir('./src/cmd/', (err, files) => {
            if(err) console.error(err);
    
            let file = files.filter(f => f.split(".").pop() === "js");
    
            if(file.length <= 0) {
                console.log("No CMDS")
                return
            }
    
            console.log(`Loads ${file.length} CMDS`);
    
            // for (let cmdfile of file) {
            //     console.log(`${cmdfile} loaded`)
            //     let command = require(`./../cmd/${cmdfile}`)
                
                
    
            //     collection.set(command.help.name, command)
            // }
            file.forEach(function(f, i) {
                let props = require(`./../cmd/${f}`);
                console.log(`${i + 1}: ${f} loaded!`);
               
                collection.set(props.help.name, props);
                  
            });
        })
    }
}

module.exports = new func()