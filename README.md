# Guidepup Setup Action

<a href="https://github.com/guidepup/setup-action/blob/main/LICENSE"><img alt="Guidepup Setup Action uses the MIT license" src="https://img.shields.io/github/license/guidepup/setup-action" /></a>

## [Documentation](https://www.guidepup.dev/docs/guides/automated-environment-setup)

[![MacOS Big Sur Support](https://img.shields.io/badge/macos-Big_Sur-blue.svg?logo=apple)](https://apps.apple.com/id/app/macos-big-sur/id1526878132)
[![MacOS Monetary Support](https://img.shields.io/badge/macos-Monetary-blue.svg?logo=apple)](https://apps.apple.com/us/app/macos-monterey/id1576738294)
[![MacOS Ventura Support](https://img.shields.io/badge/macos-Ventura-blue.svg?logo=apple)](https://apps.apple.com/us/app/macos-ventura/id1638787999)
[![Windows 10 Support](https://img.shields.io/badge/windows-10-blue.svg?logo=windows10)](https://www.microsoft.com/en-gb/software-download/windows10ISO)
[![Windows Server 2019 Support](https://img.shields.io/badge/windows_server-2019-blue.svg?logo=windows)](https://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-2019)
[![Windows Server 2022 Support](https://img.shields.io/badge/windows_server-2022-blue.svg?logo=windows)](https://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-2022)

GitHub Action to set up your environment for screen reader automation.

It enables automation for <a href="https://www.guidepup.dev/docs/api/class-voiceover"><b>VoiceOver on MacOS</b></a> and <a href="https://www.guidepup.dev/docs/api/class-nvda"><b>NVDA on Windows</b></a> using the [`@guidepup/setup`](https://github.com/guidepup/setup/) package.

## Usage

Just add this step to your workflow(s) to enable steps that use screen reader automation in GitHub CI:

```yaml
- name: Setup Environment
  uses: guidepup/setup-action
```

### MacOS

#### Recording

If you are encountering errors in CI for MacOS you can pass a `record` option which will output a screen-recording of the setup to a `./recordings/` directory:

```yaml
- name: Setup Environment
  uses: guidepup/setup-action
  with:
    record: true
```

There are also options to change the screen resolution:

```yaml
- name: Setup Environment
  uses: guidepup/setup-action
  with:
    resolutionWidth: "1920"
    resolutionHeight: "1080"
```

### Windows

#### NVDA Installation

When running on windows a portable NVDA instance compatible with Guidepup will be installed to a temporary directory by default. The location of this installation directory is stored in the Windows registry under the key `HKCU\Software\Guidepup\Nvda`.

If you want to specify the directory that NVDA is installed to you can pass a `nvdaInstallDir` option:

```yaml
- name: Setup Environment
  uses: guidepup/setup-action
  with:
    nvdaInstallDir: <NVDA_INSTALLATION_DIRECTORY>
```

## Supports

- [Guidepup](https://github.com/guidepup/guidepup/)
- [Auto-VO](https://www.npmjs.com/package/@accesslint/auto-vo)
- [VoiceOver.js](https://www.npmjs.com/package/@accesslint/voiceover)
- [web-test-runner-voiceover](https://www.npmjs.com/package/web-test-runner-voiceover)

and more!

## Powerful Tooling

Check out some of the other Guidepup modules:

- [`@guidepup/guidepup`](https://github.com/guidepup/guidepup/) - Reliable automation for your screen reader a11y workflows through JavaScript supporting VoiceOver and NVDA.
- [`@guidepup/playwright`](https://github.com/guidepup/guidepup-playwright/) - Seamless integration of Guidepup with Playwright.
- [`@guidepup/virtual-screen-reader`](https://github.com/guidepup/virtual-screen-reader/) - Reliable unit testing for your screen reader a11y workflows.
- [`@guidepup/jest`](https://github.com/guidepup/jest/) - Jest matchers for reliable unit testing of your screen reader a11y workflows.

## Resources

- [Documentation](https://www.guidepup.dev/docs/guides/automated-environment-setup)
- [Changelog](https://github.com/guidepup/setup-action/releases)
- [MIT License](https://github.com/guidepup/setup-action/blob/main/LICENSE)
