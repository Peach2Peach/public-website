const en = require('./translations/en.json')
const es = require('./translations/es.json')
const fr = require('./translations/fr.json')
const de = require('./translations/de.json')
const it = require('./translations/it.json')
const el = require('./translations/el.json')
const sw = require('./translations/sw.json')
const pt = require('./translations/pt.json')
const uk = require('./translations/uk.json')
const pl = require('./translations/pl.json')
const ar = require('./translations/ar.json')
const bg = require('./translations/bg.json')
const cs = require('./translations/cs.json')
const da = require('./translations/da.json')
const el_GR = require('./translations/el-GR.json')
const hi = require('./translations/hi.json')
const hr = require('./translations/hr.json')
const nb = require('./translations/nb.json')
const nl = require('./translations/nl.json')
const ro = require('./translations/ro.json')
const ru = require('./translations/ru.json')
const tr = require('./translations/tr.json')

const properties = {
  en,
  es,
  fr,
  de,
  it,
  el,
  sw,
  pt,
  uk,
  pl,
  ar,
  bg,
  cs,
  da,
  el_GR,
  hi,
  hr,
  nb,
  nl,
  ro,
  ru,
  tr,
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
