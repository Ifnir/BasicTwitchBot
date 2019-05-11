const fs = require('fs')

module.exports.run = async (client, target, args) => {
    
    fs.readFile('./src/data/test.json', function (err, data) {
        if(err) console.error(err)
        let obj = JSON.parse(data)
        console.log(obj.questions.text)
        
        return client.say(target, `${obj.questions.text}`)
 
    })
  
}

module.exports.help = {
    name:'quiz'
}
