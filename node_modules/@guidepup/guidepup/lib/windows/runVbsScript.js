"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runVbsScript = runVbsScript;
const path_1 = require("path");
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const os_1 = require("os");
const { mkdtemp, realpath, rm, writeFile } = fs_1.promises;
const DEFAULT_MAX_BUFFER = 1000 * 1000 * 100;
const CSCRIPT = "cscript";
const withTempFile = async (fn) => await withTempDir((dir) => fn((0, path_1.join)(dir, "script.vbs")));
const withTempDir = async (fn) => {
    const dir = await mkdtemp((await realpath((0, os_1.tmpdir)())) + path_1.sep);
    try {
        return await fn(dir);
    }
    finally {
        await rm(dir, { recursive: true });
    }
};
async function runVbsScript(script) {
    return await withTempFile(async (filePath) => {
        await writeFile(filePath, script);
        return new Promise((resolve, reject) => {
            const child = (0, child_process_1.execFile)(CSCRIPT, [filePath], {
                maxBuffer: DEFAULT_MAX_BUFFER,
            }, (e, stdout) => {
                if (e) {
                    return reject(e);
                }
                if (!stdout) {
                    return resolve();
                }
                else {
                    return resolve(stdout.trim());
                }
            });
            child.stdin.end();
        });
    });
}
