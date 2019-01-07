const exec = require('./exec');

switch (process.argv[2]) {
  case 'exec':
    console.log(exec(JSON.parse(process.argv[3])));
    break;
}
