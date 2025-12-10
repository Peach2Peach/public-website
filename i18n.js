const en = require('./translations/en.json')
const es = require('./translations/es.json')
const fr = require('./translations/fr.json')
const de = require('./translations/de.json')
const it = require('./translations/it.json')
const pt = require('./translations/pt.json')

const properties = {
  en,
  es,
  fr,
  de,
  it,
  pt,
}

/**
 * @description Method to get localized string based on current locale
 * it will use the following fallback order
 * de-CH – language-COUNTRY
 * de    – language
 * en    – default locale
 *
 * if no text can be found, it will return the id of the resource
 * @param id the id of the localized text
 * @param ...args multiple arguments to replace placeholders
 * @returns localized text or id if no text could be found
 */
const i18n = (id, locale, ...args) => {
  let text = properties[locale][id]

  if (!text && locale.includes('-')) {
    const language = locale.split('-')[0]
    text = properties[language][id]
  }
  if (!text) text = properties.en[id]

  if (!text) return id

  args.forEach((arg, index) => {
    const regex = new RegExp(`\\$${index}`, 'ug')
    text = text.replace(regex, arg)
  })

  text = text.replace(/\n/gu, '<br/>')

  return (text.match(/ /gu) || []).length >= 4
    ? text.replace(/ (?=[^ ]*$)/u, ' ')
    : text
}

module.exports = i18n
