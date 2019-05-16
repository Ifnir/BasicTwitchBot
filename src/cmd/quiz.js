const fs = require('fs')
const regex = require('./../utils/Regex')

module.exports.run = async (client, target, args) => {
    
    const file = await new Promise((res, rej) => {
        fs.readFile('./src/data/test.json', function (err, data) {
                if(err) rej(err)

                const obj = JSON.parse(data);
           
                obj.q.forEach(function(el) {
                    console.log(el.text)
                })

            });
    });
    
 

}

module.exports.help = {
    name:'quiz'
}
