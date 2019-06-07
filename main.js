const Tmi = require('tmi.js')
const opts = require('./config')
const fs = require('fs')
const collection = require('./src/utils/collection')

// Create a client with our options
const client = new Tmi.Client(opts)

const read = require('./src/function/readdir')

read.readdir(fs, collection)

function onMessageHandler (target, context, msg, self) {
  if (self) { return } // Ignore messages from the bot

  let prefix = '!'
  let msgArray = msg.split(/\s+/g)
  let args = msgArray.slice(1)

  let command = msgArray[0]

  let cmd = collection.get(command.slice(prefix.length))
  if (cmd) {
    console.log(`Command ${cmd.help.name} Executed`)
    cmd.run(client, target, args, msg)
  }
}
// Register our event handlers (defined below)
client.on('message', onMessageHandler)
client.on('connected', onConnectedHandler)

// Connect to Twitch:
client.connect()

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`)
}
