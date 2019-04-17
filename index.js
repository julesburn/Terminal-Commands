const uuid = require('uuid');
const newUuid = uuid();
//console.log(`your new Universally unique identifier is ${newUuid}`);
const myLibrary = require('./my-library');
const terminalCommands = require('./terminal-commands');

terminalCommands.ls();

terminalCommands.touch();

terminalCommands.mkdir();

//myLibrary.myFirstMethod();
