module.exports = {
	name: "cixfra_web", // Name of your application
	script: "index.js", // Entry point of your application
	interpreter: "bun", // Bun interpreter
	env: {
	  PATH: `${process.env.HOME}/.bun/bin:${process.env.PATH}`, // Add "~/.bun/bin/bun" to PATH
	  "PORT": 6621
	}
  };
