const args = JSON.parse(process.argv[2]);

console.log(JSON.stringify({
  sum: ((args.z) ? (args.x + args.y + args.z) : (args.x + args.y)),
  args: args,
  environment_variables: process.env
}));
