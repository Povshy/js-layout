import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

// =============

const main = createElement('main', 'post__list')
const head = createElement('div', 'head')
const but1 = createElement(
  'button',
  'button head--viewed',
  'База знань',
)
const but2 = createElement(
  'button',
  'button head--noviewed',
  'Інформація',
)

head.append(but1, but2)
main.append(head)

// ----------
const img = createElement('img', 'img')
img.width = 350
img.src = '/img/image-1.png'
main.append(img)

// ----------
const post = createElement('div', 'post button')
const h2 = createElement('h2', 'h2', 'Що таке база знань?')
const p = createElement(
  'p',
  'post__info',
  'База знаний — база данных, содержащая правила вывода и информацию о человеческом опытe и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
)
post.append(h2, p)
main.append(post)

// --------------
const tele_but = createElement(
  'button',
  'button telega',
  'Перейти до ком`юніті у Телеграм',
)
main.append(tele_but)

// ------------
page.append(main)
