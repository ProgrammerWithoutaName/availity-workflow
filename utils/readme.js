var path = require('path');
var fs = require('fs');
var _ = require('lodash');

module.exports = function(cli, template) {
  var contents = _.template(template)(cli.answers);

  var instructions = path.join(process.cwd(), 'INSTRUCTIONS.md');
  var readme = path.join(process.cwd(), 'README.md');

  // Copy the original README to INSTRUCTIONS
  if (!fs.existsSync(instructions)) {
    fs.writeFileSync(instructions, fs.readFileSync(readme));
  }

  fs.writeFileSync(path.join(process.cwd(), 'README.md'), contents, 'utf8');
};
