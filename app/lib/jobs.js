module.exports.async_job = async (client, target) => {
    /**
     * Begins when achat is active
     */
      setInterval(() => {
        return client.say(target, `We are testing a setInterval`)
    }, 10000)
  
}

  
