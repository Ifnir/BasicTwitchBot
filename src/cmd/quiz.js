const fs = require('fs')
const regex = require('./../utils/Regex')

module.exports.run = async (client, target, args, msg) => {

    
    function question(question) {
        return client.say(target, `${question}`)
    }
    function answer(answer){
        //regex answer
    }
    
    const file = await new Promise((res, rej) => {
        fs.readFile('./src/data/test.json', async function (err, data) {
            if(err) rej(err);

            const read = JSON.parse(data);
           
            res(read)

        });
    });

    const qs = async() => await file.q.forEach(function(el) {

        if(el.asked != false) return;

        async function promptAnswer() {
            return new Promise(function(res, rej) {
                var ask = async function() {
                    
                    question(el.text);
                    
                }
                ask();
            });
        } 
        promptAnswer();    
    });
    
    qs();
   
}

module.exports.help = {
    name:'quiz'
}
