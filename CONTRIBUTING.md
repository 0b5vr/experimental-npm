# CONTRIBUTING.md

Actually a memo for myself

### Development

Author code on `dev` branch

```
npm i
npm run dev
```

Test is your friend

### Releasing

Run [Publish Workflow](https://github.com/0b5vr/experimental-npm/actions/workflows/publish.yml) on GitHub Actions.
After the workflow is done, merge the version commit to `release` branch.

Don't forget to make a [release](https://github.com/0b5vr/experimental-npm/releases)!

### Nightly builds

It automatically builds and deploys the HEAD of the `dev` branch

See `deploy-nightly` workflow on GitHub Actions
