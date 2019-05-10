# Compass

React implementation of Syneto's Compass Design System: https://synetonet.github.io/compass-react/

## Setup

```
npm install https://github.com/SynetoNet/compass-react.git
```

Include styles in your main file:

```
import "compass-react/lib/styles.css"
```

Import and use components:

```
import { Button } from "compass-react"
```

## Development

1. Clone the repo and install dependencies:

```
npm install
```

2. Use `develop` branch (or a `feature/branch`, then merge to `develop`):

```
git checkout develop
```

3. Run the development server using React Styleguidist:

```
npm run develop
```

4. Run tests:

```
// run tests
npm test

// update snapshots
npm run test:update
```

### Commit messages

All **relevant** commits should have the following message:

```
type(category): description [flags]
```

Where `type` is one of the following:

- **feat**: for New Features
- **fix**: for Bug Fixes
- **breaking**: for Breaking Changes
- **docs**: for Documentation Changes
- **build**: for Build System / Dependencies updates
- **perf**: for Performance Improvements
- **refactor**: for Refactors
- **test**: for Tests
- **chore**: for Chores / Routine tasks
- **other**: for any Other Changes

And `flags` is one of the following:

- **breaking**: alters `type` to be a breaking change

Examples:

```
feat(Badge): New Badge component
feat(Button): Add loading prop

fix(Dialog): Modal dialog should not close when clicking outside (#12)

docs(Button): add loading Button examples
// category is optional
docs: add new section for colors

build(docs): add loading Button examples

fix(Button): changed prop loading to isLoaded [breaking]
```

## Release

We use **Semantic Versions** for releases.

**Patch version**: a release that contains fixes, without breaking changes or new features:

```
npm run release:patch
```

**Minor version**: a release that contains at least one new feature, without breaking changes:

```
npm run release:minor
```

**Major version**: a release that contains at least one breaking change:

```
npm run release:major
```

Push release to repo:

```
git push origin develop
git push --tags

// merge into master
git checkout master
git merge develop
git push origin master
```

Publish to npm registry:

```
npm publish --access public
```


## About this project

Based on this [starter kit](https://github.com/samuelmeuli/react-library-boilerplate).

What's included:

- Rollup and Babel for generating a bundle of your library in ES5
- React Styleguidist and Webpack for developing/testing the UI components interactively
- Prettier, ESLint, and Stylelint for code formatting/linting
- Sass and Autoprefixer support for simple styling
- Jest for unit testing components
- Changelog generator
- Bundle [vizualizer](https://synetonet.github.io/compass-react/statistics.html)
