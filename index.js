const commandLineArgs = require('command-line-args');

const optionDefinitions = [
  {
    name: 'name',
    alias: 'n',
    type: String,
  },
];

const options = commandLineArgs(optionDefinitions);

const name = options.name || 'Juan';
const year = new Date().getFullYear();

console.log(`Hey ${name}, we are in ${year}`);
