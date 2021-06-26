# Resume

My personal resume built using [GatsbyJS](https://www.gatsbyjs.com/) with the
`Read Only` design from [HTML5 UP](https://html5up.net/). I converted most of the
design to React components, because I like to work with building blocks that can be
combined to create something nice and I wanted to practice my React skills.

The custom JS of the design has also been replaced by my own JS that works better
with React and also uses new features of modern browsers:
- [Element.scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
  has been used to scroll to the correct section when its corresponding link is clicked
  in the sidebar. This is also polyfilled for browser versions that don't support it
  by including the [smoothscroll-polyfill](https://www.npmjs.com/package/smoothscroll-polyfill).
- [The intersection observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
  has been used to detect which section is active so that the corresponding link
  in the sidebar also becomes active. This has also been polyfilled for older browser
  versions by including the [intersection-observer](https://www.npmjs.com/package/intersection-observer)
  npm package.
- The visibility of the sidebar on mobile is also controlled by React.

## Hosting

It is hosted on Netlify on my own domain: https://www.koencastermans.com/. Every push
to the master `master` branch will trigger a production deploy. Every push to the
`development` branch will trigger a separate deploy for testing purposes. This also
applies to pull requests against the `master` and `development` branches. They will
get their own deploy previews to check how the new changes would look in a production
environment.

## Requirements

- Node (I used version `12.13.0`)
- Yarn (I used version `1.22.5`)
- [gatsby-cli](https://www.npmjs.com/package/gatsby-cli) (I used version `3.8.0`)

## Development

The first time the dependencies need to be installed by running `yarn` in the terminal.

To start the local development server run the following command:

```bash
gatsby develop
```

It should start a local server on `http://localhost:8000/` which live reload on
every saved change.

## Build

To create a production build, run the following command:

```bash
gatsby build
```

The production build is set in the `public` folder. This build can also be tested
locally by running the command:

```bash
gatsby serve
```
