const isCi = process.env.CI !== undefined;

// Don't install husky in the CI pipeline
if (!isCi) {
  require('husky').install();
}
