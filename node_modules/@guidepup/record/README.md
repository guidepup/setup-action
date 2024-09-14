# Record

<a href="https://www.npmjs.com/package/@guidepup/record"><img alt="Available on NPM" src="https://img.shields.io/npm/v/@guidepup/record" /></a>
<a href="https://github.com/guidepup/record/actions/workflows/test.yml"><img alt="Test workflows" src="https://github.com/guidepup/record/workflows/Test/badge.svg" /></a>
<a href="https://github.com/guidepup/record/blob/main/LICENSE"><img alt="This project uses the MIT license" src="https://img.shields.io/github/license/guidepup/record" /></a>

## Getting Started

Install to your project:

```bash
npm install @guidepup/record
```

### Windows

Start a screen recording on Windows:

```ts
import { windowsRecord } from "@guidepup/record";

(async () => {
  // Start the screen recording passing the location to save the recording.
  const stopRecording = windowsRecord("./recordings/screenRecording.mp4");

  // ... perform some commands.

  // Stop the screen recording.
  stopRecording();
})();
```

### MacOS

Start a screen recording on MacOS.

```ts
import { macOSRecord } from "@guidepup/record";

(async () => {
  // Start the screen recording passing the location to save the recording.
  const stopRecording = macOSRecord("./recordings/screenRecording.mov");

  // ... perform some commands.

  // Stop the screen recording.
  stopRecording();
})();
```

## Resources

- [Contributing](.github/CONTRIBUTING.md)
- [Changelog](https://github.com/guidepup/record/releases)
- [MIT License](https://github.com/guidepup/record/blob/main/LICENSE)
