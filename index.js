const process = require("process");
const core = require("@actions/core");

try {
  process.argv.push("--ci");
  require("@guidepup/setup");
} catch (err) {
  core.setFailed(err);
  process.exit();
}
