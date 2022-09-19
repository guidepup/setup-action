const process = require("process");
const core = require("@actions/core");
const exec = require("@actions/exec");

try {
  await exec.exec(`"/Library/Application Support/VMware Tools/vmware-resolutionSet" 1440 900`);
  process.argv.push("--ci");
  require("@guidepup/setup");
} catch (err) {
  core.setFailed(err);
  process.exit();
}
