// Function called when the "dice" command is issued
module.exports = function(){
    const sides = 6;
    return Math.floor(Math.random() * sides) + 1;
  }