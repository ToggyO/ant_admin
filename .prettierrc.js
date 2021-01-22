const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
  printWidth: 110,
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  endOfLine: "lf"
};
