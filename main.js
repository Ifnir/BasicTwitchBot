const tmi = require('tmi.js');
const opts = require('./src/config')
const fs = require("fs");

// Create a client with our options
const client = new tmi.client(opts);


/**
 * @TODO 
 * Read file and for file in files require them when call them by commandname
 */

require('./src/function/readdir')(fs)


function onMessageHandler (target, context, msg, self) {
    
    if (self) { return; } // Ignore messages from the bot
  
    // Remove whitespace from chat message
    const commandName = msg.trim();
  
    // If the command is known, let's execute it
    if (commandName === '!dice') {
      const num = method()
      client.say(target, `You rolled a ${num}`);
      console.log(`* Executed ${commandName} command`);
    } else {
      console.log(`* Unknown command ${commandName}`);
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