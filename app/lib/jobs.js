module.exports.async_job = async (client, target) => {
    /**
     * Begins after the first command is executed.
     */
      setInterval(() => {
        return client.say(target, `We are testing a setInterval`)
    }, 10000)
  
}

  
