const Tmi = require('tmi.js')
const opts = require('./config')

// Create a client with our options
const client = new Tmi.Client(opts)

// https://javascript.info/map-set-weakmap-weakset
const map = new Map()

// Read files
require('./app/lib/readdir')(map)

function onMessageHandler (target, context, msg, self) {
  if (self) { return } // Ignore messages from the bot

  let prefix = '!'
  let msgArray = msg.split(/\s+/g)
  let args = msgArray.slice(1)

  let command = msgArray[0]

  let cmd = map.get(command.slice(prefix.length))
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
