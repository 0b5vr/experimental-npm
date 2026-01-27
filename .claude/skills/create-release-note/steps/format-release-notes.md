Format the release notes in markdown format.

Use the template below as a reference for the structure:

```markdown
<!-- Replace the version tag (vx.x.x) according to the release version -->
https://github.com/0b5vr/experimental-npm/compare/vx.x.x...vx.x.x

---

<!-- If there are no important notes, remove this section -->

### 🚨 BREAKING CHANGES 🚨

- 1234abc: The behavior of ... has changed from ... to ...
- 5678abc: Removed ...

---

<!-- Follow the category order defined in `steps/categorize-changes.md`. Empty categories must be removed -->
<!-- Latest commit first, oldest last -->

### ✨ New Features

- 1234abc: Add ...
- 5678abc: ... now accepts ...

### 💡 Behavior Changes

- 1234abc: Change behavior of ...

### 🗑️ Removals

- 5678abc: Remove ...

### 🐛 Bugfixes

- 1234abc: Fix issue where ...
- 5678abc: Resolve bug in ...

### 📦 Deps

- 1234abc: Bump ... from x.x.x to x.x.x
- Automated: 5678abc, 6789abc, 7890abc
```

After formatting, make sure to include ALL changes in the release notes.
Then, present the final release notes as a code block to the user.

Finally, provide a clickable link for convenience:
[https://github.com/0b5vr/experimental-npm/releases/new](https://github.com/0b5vr/experimental-npm/releases/new)
