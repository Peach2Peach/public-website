const { writeFileSync, readdirSync } = require('fs')
const { join, relative, resolve } = require('path')
const { globSync } = require('glob')
const { slugify } = require('../helpers')
const { toDate, getMarkdown } = require('./helpers')

const meta = require('../content/meta.json')
const meetups = require('../content/peach-meetups.json')

const dir = resolve(__dirname, '..')
const dst = join(dir, 'site-data.json')

// site data
const data = {
  meta: meta,
  meetups: meetups,
  pages: [],
  posts: [],
  tags: [],
}

const languages = readdirSync(join(dir, 'content')).filter(
  name => !name.includes('.'),
)

languages.forEach(language => {
  const pages = globSync(join(dir, 'content', language, '**', '*.md')).map(
    filePath => {
      const pageData = getMarkdown(filePath)
      if (language !== 'default') pageData.lang = language
      pageData.permalink = relative(join(dir, 'content'), filePath)
        .replace('.md', '')
        .replace(language + '/', '')
      pageData.id = pageData.permalink
      return pageData
    },
  )

  const posts = globSync(join(dir, 'content', language, 'blog', '*.md'))
    .map(filePath => {
      const postData = getMarkdown(filePath)
      const match = filePath.match(/(\d{4}-\d{2}-\d{2})-(.*)\./)
      if (!match) {
        return null
      }
      const [, dateStr, name] = match
      const parsedDate = new Date(dateStr)
      if (isNaN(parsedDate.getTime())) {
        return null
      }

      if (!postData.title) {
        return null
      }

      postData.date = toDate(dateStr)      // if we prefeer an object data we can also use : postData.date = parsedDate
      postData.name = name
      postData.permalink = `blog/${postData.name}`
      if (language !== 'default') postData.lang = language

      return postData
    })
    .filter(Boolean)
  // blog with tags
  const blogPage = pages.find(p => p.id === 'blog')
  const tags = Object.values(
    posts.reduce((res, post) => {
      if (post.tags) {
        post.tags.forEach(tag => {
          const slug = slugify(tag)
          const permalink = `blog/tag/${slug}`
          const name = `tag-${slug}`
          res[slug] =
            res[slug] ||
            Object.assign({}, blogPage, { permalink, tag, name, posts: [] })
          res[slug].posts.push(post)
          if (language !== 'default') res[slug].lang = language
        })
      }
      return res
    }, {}),
  )

  data.pages = data.pages.concat(pages)
  data.posts = data.posts.concat(posts)
  data.tags = data.tags.concat(tags)
})

data.posts.sort((a, b) => new Date(b.date) - new Date(a.date))

const json = JSON.stringify(data, null, 2)

writeFileSync(dst, json)
