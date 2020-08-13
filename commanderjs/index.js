// initialise the program
const { program } = require('commander')

// CUSTOM HANDLER FUNCTIONS
function myParseInt(value, prev) {
    return parseInt(value)
}
function collect(value, prev) {
    return prev.concat([value])
}

// COMMANDS
program
    .command('deliver <destination>')
    .description('deliver your pizza orders')
    .action((destination) => {
        console.log(`pizza delivered to ${destination}`)
    })

// Specify a command that takes in flags
program
    .command('contact <name>')
    .option('-P, --phone', 'Contact by phone')
    .action(function (name, cmdObj) {
        console.log(`Contacting ${name}` + (cmdObj.phone ? ' by phone' : ''))
    })

// flags:       shown when -h is used
// description: shown when -h is used (added by default)
program
    // accept a boolean flag, true when set
    .option('-d, --debug', 'output extra debugging')
    // accept an option which takes a value
    // defaultValue is used with the flag when the flag is not specified at all.
    .option('-p, --pizza-type <type>', 'flavour of pizza', 'default flavour')
    // accept a boolean flag, false when set
    .option('-ns, --no-sauce', 'remove sauce')
    // options which functions as a flag but optionally takes a value
    .option('-t, --tomatoes [type]', 'add tomatoes with optional type')
    // define custom handlers for options
    .option('-i, --integer <number>', 'integer argument', myParseInt)
    // specify a default value for previous
    .option('-c, --collect <value>', 'repeatable value', collect, [])
    // specify a required option
    // .requiredOption('-r, --required <type>', 'this is required')
    // variable-number values to an option
    .option('-n, --numbers <numbers...>', 'specify numbers')

program.parse(process.argv)

// allows display of version flag on -V or --version
program.version('0.0.1')

// print out the parsed options in debug mode
if (program.debug) {
    console.log('Options:', program.opts())
    console.log('Unconsumed args:', program.args)
}

console.log('\nYour pizza details:');

// hyphenated options converted to camelcase
if (program.pizzaType) {
    console.log(`- ${program.pizzaType}`)
}
if (!program.noSauce) {
    console.log(`- no sauce`)
}
if (program.tomatoes === undefined) {
    console.log('- no tomatoes')
} else {
    console.log(`- ${program.tomatoes} tomatoes`)
}
if (program.integer) {
    console.log(`- ${program.integer} pizzas`)
}
if (program.collect.length > 0) {
    console.log(`- collect: [${program.collect}]`)
}
if (program.required) {
    console.log(`- ${program.required}`)
}
if (program.numbers) {
    console.log(`- numbers: [${program.numbers}]`)
}