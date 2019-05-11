// Function called when the "dice" command is issued
class func {
  rolldice(client, target) {
     const sides = 6;
    let num = Math.floor(Math.random() * sides) + 1;
    return client.say(target, `You rolled a ${num}`);
  }
}
   
module.exports = new func();