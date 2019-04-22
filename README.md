# Compass

React implementation of Syneto's Compass Design System.

Based on this [starter kit](https://github.com/samuelmeuli/react-library-boilerplate).

What's included:

- Rollup and Babel for generating a bundle of your library in ES5
- React Styleguidist and Webpack for developing/testing the UI components interactively
- Prettier, ESLint, and Stylelint for code formatting/linting
- Sass and Autoprefixer support for simple styling

## How to use it?

```
npm install [this package]
```

Include styles in your main file:

```
import "compass-react/src/foundation/styles.css"
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

2. Run the development server using React Styleguidist:

```
npm run develop
```

3. Build components:

```
npm run build
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
