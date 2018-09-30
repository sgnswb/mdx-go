
# Blazin' :fire:

![](https://s3.amazonaws.com/jxnblk/mdx-go-24.gif)

:zap: Zero-config [MDX][]-based dev server for progressive documentation

https://blazin.now.sh

[![Build Status][badge]][travis]
[![Downloads][downloads-badge]][npm]
[![Version][version-badge]][npm]
[![MIT License][license]](LICENSE.md)

```sh
npm i -g blazin
```

- :zero: Zero-config dev server
- :memo: Write in markdown
- :atom_symbol: Import and use React components
- :file_folder: File-system based routing
- :triangular_ruler: Customizable layouts
- :woman_singer: Support for [styled-components][] & [emotion][]
- :globe_with_meridians: Export as static HTML
- :unlock: Avoid lock-in and easily migrate to other MDX-based tools

[badge]: https://flat.badgen.net/travis/jxnblk/blazin
[travis]: https://travis-ci.org/jxnblk/blazin

[version-badge]: https://flat.badgen.net/npm/v/blazin
[downloads-badge]: https://flat.badgen.net/npm/dt/blazin
[npm]: https://npmjs.com/package/blazin

[license]: https://flat.badgen.net/badge/license/MIT/blue
[coverage]: https://flat.badgen.net/codecov/c/github/jxnblk/blazin

## Getting Started

Create a `docs` folder and `docs/index.mdx` file.

```mdx
import MyComponent from '../src'

# Component Demo

<MyComponent
  beep='boop'
/>
```

Start the dev server on the `docs` folder:

```sh
blazin docs
```

### npm run scripts

Alternatively, blazin can be installed as a development dependency and used with run scripts in your `package.json`.

```json
"scripts": {
  "dev": "blazin docs",
  "docs": "blazin build docs"
}
```

```sh
npm run dev
```

## Motivation

Blazin is built with the idea of **[Progressive Documentation][]** in mind,
intended to be used anywhere as a dev server, prototyping tool, or simple static site generator.
By embracing the MDX file format, the docs you create with blazin can easily be used in other tools.
Start your docs with blazin and migrate to tools like [Next.js][] and [Gatsby][] when needed.
You can even keep blazin around to use as a dev tool outside of other React applications.

[Next.js]: https://github.com/zeit/next.js/
[Gatsby]: https://github.com/gatsbyjs/gatsby

## Using MDX

MDX combines the simplicity of markdown with the ability to import and use React components inline.

Write markdown like you normally would.

```md
# Hello
```

Import and use React components inline.

```mdx
import { Box } from 'grid-styled'

# Hello

<Box p={3} bg='tomato'>
  This is a React component!
</Box>
```

To learn more about using MDX, see the [MDX docs][MDX].

## Routing

Each MDX file in the target directory will become its own route,
with `index.mdx` serving as the base route, i.e. `/`.

With the following directory structure:

```
docs/
  index.mdx
  getting-started.mdx
  api.mdx
```

Blazin will create routes for `/`, `/getting-started`, and `/api`.

Blazin also supports using React components as routes for files with the `.js` extension.
Be sure that the `.js` file exports a default component to render as a route.

## Layouts

Blazin includes a default layout that centers the document in the viewport,
but custom layout components can be added both globally and per-route.

To render a custom layout for a single route, export a component as the `default` from the MDX file.
This is a built-in [feature of MDX](https://mdxjs.com/syntax#export-default).

```mdx
import Layout from './Layout'

export default Layout

# Page with layout
```

To wrap all routes with a custom layout, export a `Root` component from your `index.mdx` file.
This will completely disable the built-in centered layout.
Note: this only works in the `index` route, not other routes.

```mdx
export { Root } from './Root'

# Root layout for all routes
```

## Head Content

Head contents can be set per-route by using the `Head` component.

```mdx
import { Head } from 'blazin'

<Head>
  <title>Page title</title>
</Head>

# Page with title
```

To set head contents for all routes, use the Head component within a [`Root` component](#layouts).

## Custom MDX Components

To customize the HTML components rendered from MDX, use the `ComponentProvider` in a [`Root` component](#layouts).

```js
// example Root component
import React from 'react'
import { ComponentProvider } from 'blazin'

const components = {
  h1: props => <h1 {...props} style={{ fontSize: 48 }} />,
}

export const Root = props =>
  <ComponentProvider components={components}>
    {props.children}
  </ComponentProvider>
```

Ensure the Root component is exported from `index.mdx`

```mdx
export { Root } from './Root.js'
```

## Custom File Match Pattern

To specify a custom file pattern for matching against,
export a `files` webpack context from the main `index.mdx` file.

```mdx
export const files = require.context('../src', true, /\.example\.js$/, 'lazy')
```

## Theming

By default blazin includes virtually no styling. To customize the styles, use components to
wrap MDX with a [Root component](#layouts) and use the [MDXProvider](#custom-mdx-components) to change the default styles.

## Exporting

To export as a static site with HTML and JS bundles, run:

```sh
blazin build docs
```

This will export all routes as HTML in a `dist` folder.
See [CLI Options](#cli-options) for configuration options.

## CSS-in-JS

Blazin does not use any CSS-in-JS libraries internally, and most libraries will work when using the dev server.
To extract static CSS when using the `build` command, ensure you have either `styled-components` or `emotion` installed locally in your `package.json`.
For Emotion, be sure that `emotion-server` is also installed.

When either of these libraries are detected in your `package.json` dependencies, blazin will extract static CSS during the build process.

## CLI Options

The following flags can be passed to the CLI.

```
  -p --port     Port for dev server
  --no-open     Disable opening in default browser
  -d --out-dir  Output directory for static export
  --basename    Base path for routing
  --static      Export HTML without JS bundle
  --webpack     Path to custom webpack config
```

All CLI options can also be specified in a `blazin` field in your `package.json`.

```json
"blazin": {
  "outDir": "site"
}
```

## Custom webpack config

Blazin will automatically pick up a `webpack.config.js` if it exists in the current working directory.
A custom path can be passed to the CLI using the `--webpack` flag.
The provided webpack config will be merged with the built-in config using [webpack-merge][].

[webpack-merge]: https://github.com/survivejs/webpack-merge


## Examples

- [Basic](examples/basic)
- [Head Content](examples/head-content)
- [Routing](examples/routing)
- [Styled Components](examples/styled-components)
- [Emotion](examples/emotion)
- [Dev Environment](examples/dev-environment)
- [React Live](examples/react-live)


## Related

[MDX][] | [mdx-deck][] | [mdx-docs][] | [ok-mdx][] |
[x0][]


[MIT License](LICENSE.md)

---

<p align='center'>
  <img src='docs/src/logo.png' width='64' height='64' />
</p>


[MDX]: https://github.com/mdx-js/mdx
[mdx-themes]: https://github.com/jxnblk/mdx-themes
[mdx-deck]: https://github.com/jxnblk/mdx-deck
[mdx-docs]: https://github.com/jxnblk/mdx-docs
[ok-mdx]: https://github.com/jxnblk/ok-mdx
[styled-components]: https://github.com/styled-components/styled-components
[emotion]: https://github.com/emotion-js/emotion
[x0]: https://github.com/c8r/x0
[Progressive Documentation]: https://jxnblk.com/writing/posts/progressive-documentation/
