const process = require("process");
const core = require("@actions/core");
const exec = require("@actions/exec");

try {
  exec.exec(`sudo "/Library/Application Support/VMware Tools/vmware-resolutionSet" 1440 900 && sleep 5`);
  process.argv.push("--ci");
  require("@guidepup/setup");
} catch (err) {
  core.setFailed(err);
  process.exit();
}
