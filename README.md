# Peach Website

The official [Peach](https://peachbitcoin.com) website.

## Content

The content can be edited via the Markdown and JSON files in the [content](./content) and [blog](./blog) directories.

Every Markdown file is a page and contains the content for that particular page.
The file name is the path it will appear on on the website: `faq/account.md` ->  `/faq/account/`

The Markdown files con contain so called frontmatter, which allows to add data to that page.
This is used to e.g. reference a special `template`, list `keywords` or associate a `teaserImage` with that page.

### Sections

The Markdown content can have a special kind of HTML comment (`<!--[section_name]-->`) which splits the content into inividual sections.
This is done to assign chunks of content to different parts of the page, which can then be referenced in the page's template.
See the [homepage content](./content/index.md) and [homepage template](./src/index.pug) for an example.

### Blog

The filenames of the blogposts are prefixed by the date those posts should be published at.

Note: This is just a reference for the displayed date and not automated so that the posts go live on that date!

### Custom Blocks

There are some cases in which the Markdown got enriched with [custom blocks](./helpers.js) like `box`, `note`, `figures` and `buttons`.
Those blocks are for layout purposes and wrap the content into containers which are styled with CSS.

These blocks start and end with at least three colons `:::` and can be nested by incrementing the number of colons to the outside:

```md
::::figures 3     // starts the figures block
:::box tech-peach // starts the box block
Actual content
:::               // ends the box block
::::              // ends the figures block
```

#### Example Job Description

On the Join Us page this is used to manage the open position descriptions.

Within the `::::figures 3` block, you can add a block like this, to post a new job listing:

```
:::box tech-peach
### Local market growth hacker

We are looking for someone to help us develop the regions UK, Germany, Spain and Italy.
:::
```

## Workflow

The site is published on [GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages):
Whenever the content of the `main` branch changes, the site gets build and a new version goes online.

This allows for a convenient workflow like this:
Whenever you want to do updates to the content, create a branch, do the changes and publsih it as a pull request on GitHub.
Netlify builds and hosts previews for those pull requests targeting the `main` branch.
Once everything is done you can merge the pull request and the updates will appear on the website.

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
