const argv = process.argv;

function cliApp(argv: Array<string>) {
  const command = argv[2];

  switch (command) {
    case "add":
      console.log(argv[3]);
      break;

    default:
      break;
  }
}

cliApp(argv);
