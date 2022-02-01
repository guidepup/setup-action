const process = require("process");
const core = require("@actions/core");

try {
  require("@guidepup/setup");
} catch (err) {
  core.setFailed(err);
  process.exit();
}
