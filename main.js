const tmi = require('tmi.js');
const opts = require('./src/config')
const fs = require("fs");
const collection = require('./src/utils/Collection')

// Create a client with our options
const client = new tmi.client(opts);

const read = require('./src/function/readdir')
const rolldice = require('./src/cmd/rolldice')

read.readdir(fs, collection)

function onMessageHandler (target, context, msg, self) {
    
    if (self) { return; } // Ignore messages from the bot

    let prefix = "1"
    let msgArray = msg.split(/\s+/g);
    let args = msgArray.slice(1);
  
    let command = msgArray[0];

    let cmd = collection.get(command.slice(prefix.length));
    // If the command is known, let's execute it
    if (cmd) {
      console.log(cmd.name)
      cmd.run(client, target, args)
      
      // if(cmd === 'dice'){
      //   rolldice.rolldice(client, target)
      //   console.log(`* Executed ${command}`);
      //   } 
      // }
  
    }
}
// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}