# Peach Website

The official [Peach](https://peachbitcoin.com) website.

## Content

The content can be edited via the JSON files in the [content directory](./content).

## Local build

[Node.js](https://nodejs.org/en/) is a prerequisite, the dependencies are managed via npm.
Once you have cloned this repo, you can setup the packages:

```bash
npm install
```

Create a build and rebuild on file change:

```bash
npm start
```

This will bring up the dev server and pattern library on [localhost:3000](http://localhost:3000).

## Production build

Use this command to create an optimized production build:

```bash
npm run prod
```

This builds a deployable version into the `dist` folder.
