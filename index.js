const process = require("process");
const os = require("os");
const core = require("@actions/core");
const exec = require("@actions/exec");

async function main() {
  try {
    if (os.platform === "darwin") {
      // Fix for GitHub actions macos-11 screencapture not working
      // REF: https://github.com/actions/runner-images/issues/5960
      const width = core.getInput("resolutionWidth") || "1920";
      const height = core.getInput("resolutionHeight") || "1080";

      try {
        await exec.exec(
          `"/Library/Application Support/VMware Tools/vmware-resolutionSet" ${width} ${height}`
        );
      } catch {
        // swallow
      }

      const record = core.getInput("record") || false;

      if (record) {
        process.argv.push("--record");
      }

      const ignoreTccDb = core.getInput("ignoreTccDb") || false;

      console.log({ ignoreTccDb });

      if (ignoreTccDb) {
        process.argv.push("--ignore-tcc-db");
      }
    }

    if (os.platform === "win32") {
      const nvdaInstallDirectory = core.getInput("nvdaInstallDir") ?? null;

      if (nvdaInstallDirectory) {
        process.argv.push("--nvda-install-dir");
        process.argv.push(nvdaInstallDirectory);
      }
    }

    // Run generic screen reader setup
    process.argv.push("--ci");

    console.log(process.argv);

    require("@guidepup/setup");
  } catch (err) {
    core.setFailed(err);
    process.exit();
  }
}

main();
