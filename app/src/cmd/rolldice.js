
module.exports.run = async (client, target, args) => {
  const sides = 6
  let num = Math.floor(Math.random() * sides) + 1
  return client.say(target, `You rolled a ${num}`)
}

module.exports.help = {
  name: 'rolldice'
}
