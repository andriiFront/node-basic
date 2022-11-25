const os = require('os')

console.log('Operating system: ', os.platform())
console.log('Processor architecture: ', os.arch())
console.log('Processor info: ', os.cpus())
console.log('Free memory: ', os.freemem())
console.log('Total memory: ', os.totalmem())
console.log('Home directory: ', os.homedir())
console.log('How long is computer on: ', os.uptime())
