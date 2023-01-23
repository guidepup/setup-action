<h1 align="center">Guidepup Setup Action</h1>
<p align="center">
  <i>GitHub Action to setup your environment for screen reader test automation.</i>
</p>
<p align="center">
  <a href="https://github.com/guidepup/setup-action/blob/main/LICENSE"><img alt="Guidepup Setup Action uses the MIT license" src="https://img.shields.io/github/license/guidepup/setup-action" /></a>
</p>

## Usage

Just add this step before to enable steps that use screen reader test automation in GitHub CI:

```yaml
- name: Setup Environment
  uses: guidepup/setup-action
```

## Supports

- [Guidepup](https://github.com/guidepup/guidepup/)
- [Auto-VO](https://www.npmjs.com/package/@accesslint/auto-vo)
- [VoiceOver.js](https://www.npmjs.com/package/@accesslint/voiceover)
- [web-test-runner-voiceover](https://www.npmjs.com/package/web-test-runner-voiceover)

## See Also

Check out some of the Guidepup modules:

- [`@guidepup/guidepup`](https://github.com/guidepup/guidepup/)
- [`@guidepup/setup`](https://github.com/guidepup/setup/)
- [`@guidepup/playwright`](https://github.com/guidepup/guidepup-playwright/)

## License

[MIT](https://github.com/guidepup/guidepup/blob/main/LICENSE)
