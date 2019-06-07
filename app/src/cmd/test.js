module.exports.run = async (client, target, args) => {
  return client.say(target, `We are testing functions`)
}
// description and the name to call the function
module.exports.help = {
  name: 'test'
}
