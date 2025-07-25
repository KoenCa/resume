# Resume

My personal resume built using [GatsbyJS](https://www.gatsbyjs.com/) with the
`Read Only` design from [HTML5 UP](https://html5up.net/). I converted most of the
design to React components, because I like to work with building blocks that can be
combined to create something nice and I wanted to practice my React skills.

The custom JS of the design has also been replaced by my own JS that works better
with React and also uses new features of modern browsers:
- [Element.scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
  has been used to scroll to the correct section when its corresponding link is clicked
  in the sidebar.
- [The intersection observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
  has been used to detect which section is active so that the corresponding link
  in the sidebar also becomes active.
- The visibility of the sidebar on mobile is also controlled by React.

Other noteworthy things:
- The website can be installed as a PWA thanks to gatsby-plugin-manifest and gatbsy-plugin-offline.
- Made my own simple favicon using Affinity Designer.

## Hosting

Hosting on GitHub Pages by building and deploying via GitHub Actions, see `gatsby.yml` for the config.

## Requirements

- Node: latest LTS
- [gatsby-cli](https://www.npmjs.com/package/gatsby-cli)

## Development

The first time the dependencies need to be installed by running `npm install --legacy-peer-deps` in the terminal.

To start the local development server run the following command:

```bash
gatsby develop
```

It should start a local server on `http://localhost:8000/` which live reloads on
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
