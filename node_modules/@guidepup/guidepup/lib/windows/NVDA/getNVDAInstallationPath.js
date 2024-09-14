"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNVDAInstallationPath = getNVDAInstallationPath;
const fs_1 = require("fs");
const getNVDARegistryData_1 = require("./getNVDARegistryData");
const path_1 = require("path");
const semver_1 = require("semver");
let installationPath;
async function getNVDAInstallationPath() {
    if (installationPath) {
        return installationPath;
    }
    const { exists, values } = await (0, getNVDARegistryData_1.getNVDARegistryData)();
    const versions = Object.keys(values).map((value) => value.replace("guidepup_nvda_", ""));
    const versionsWithoutSubVersion = versions.map((version) => version.split("-")[0]);
    if (!exists || !versions.length) {
        return null;
    }
    const maxSatisfyingVersion = (0, semver_1.maxSatisfying)(versionsWithoutSubVersion, ">=0");
    const maxSatisfyingVersionWithSubVersion = versions.find((version) => version.startsWith(maxSatisfyingVersion));
    const latestVersion = `guidepup_nvda_${maxSatisfyingVersionWithSubVersion}`;
    const guidepupNVDADirectory = values[latestVersion]?.value;
    if (!guidepupNVDADirectory) {
        return null;
    }
    const guidepupNVDAExecutablePath = (0, path_1.join)(guidepupNVDADirectory, "nvda.exe");
    if (!(0, fs_1.existsSync)(guidepupNVDAExecutablePath)) {
        return null;
    }
    return (installationPath = guidepupNVDAExecutablePath);
}
