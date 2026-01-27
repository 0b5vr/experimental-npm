Collect recent changes from the commit history since the last release.

```bash
git tag --sort=-creatordate | head -10
```

Identify the source tag and the target tag for the release notes.
If the HEAD is same as the target tag, use the previous tag as the source tag.
Otherwise, it's likely that the source tag is the latest tag and the target tag is HEAD.
If you are unsure about the source tag or the target tag, confirm the user with candidates.

Then, get the commit history since the source tag until the target tag.

```bash
git log <source-tag>..<target-tag> --pretty=format:"%h %s"
```

Output the commit history to the temporary file `tmp/commit-history.txt` for further processing.
