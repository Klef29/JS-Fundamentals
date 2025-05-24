// Get arguments passed from the command line (excluding the first 2)
const args = process.argv.slice(2);

// Check how many arguments were passed and print the appropriate message
if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
