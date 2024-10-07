const parseArgs = () => {
    const args = process.argv.slice(2);
    console.log(args);

    for (let i = 0; i < args.length; i += 2) {
        const propName = args[i].replace('--', '');
        const value = args[i + 1];
        
        console.log(`${propName} is ${value}`);
    }
};

parseArgs();

//-- run in terminal for check (examples):
// node args.js --propName value1 --prop2Name value2
// node args.js --name Ina --nicname lacrimosa --city "Mensk"