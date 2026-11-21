import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { experience, education, skills, projects, resumePdfs, profile } from '../src/data/resume.js'

const dictionary = JSON.parse(readFileSync(new URL('../src/data/translations.json', import.meta.url), 'utf8'))
const locales = ['en', 'fr', 'es']

// Keeps the content editable, but protects against accidentally shipping a broken locale.
test('all three languages contain the same nonempty translation keys', () => {
  const keys = Object.keys(dictionary.en).sort()
  for (const locale of locales) {
    assert.deepEqual(Object.keys(dictionary[locale]).sort(), keys)
    for (const [key, value] of Object.entries(dictionary[locale])) {
      assert.equal(typeof value, 'string', `${locale}:${key} must be a string`)
      assert.ok(value.trim(), `${locale}:${key} cannot be empty`)
    }
  }
})

test('every CV content key has a translation', () => {
  const keys = [
    ...experience.flatMap((item) => [item.roleKey, item.descriptionKey, ...item.detailKeys]),
    ...education.flatMap((item) => [item.degreeKey, item.courseKey, item.descriptionKey]),
    ...skills.map((item) => item.headingKey),
    ...projects.flatMap((item) => [item.nameKey, item.tagKey, item.descriptionKey].filter(Boolean)),
  ]
  for (const locale of locales) {
    for (const key of keys) assert.ok(dictionary[locale][key], `Missing ${locale}:${key}`)
  }
})

test('locale-specific CV PDFs and the profile image exist', () => {
  for (const locale of locales) {
    const url = new URL(`../public${resumePdfs[locale]}`, import.meta.url)
    assert.ok(existsSync(url), `Missing ${locale} PDF`)
    assert.equal(readFileSync(url).subarray(0, 4).toString(), '%PDF')
  }
  assert.ok(existsSync(new URL('../public/images/profile.jpg', import.meta.url)))
})

test('project entries and profile links are properly formed', () => {
  assert.ok(profile.email.includes('@'))
  assert.ok(profile.github.startsWith('https://'))
  assert.ok(profile.linkedin.startsWith('https://'))
  assert.deepEqual(new Set(projects.map((p) => p.id)).size, projects.length)
  for (const project of projects) {
    if (project.url) assert.ok(new URL(project.url).protocol === 'https:')
  }
})
