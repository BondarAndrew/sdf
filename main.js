// Завдання 1
const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`У списку ${categoryItems.length} категорії.`);

categoryItems.forEach((category) => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('ul > li');
  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів: ${categoryElements.length}`);
});

// Завдання 2
const ingredientsList = document.querySelector('#ingredients');
const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

ingredients.forEach((ingredient) => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  ingredientsList.appendChild(li);
});

// Завдання 3
const galleryList = document.querySelector('#gallery');
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: ' Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryItems = images.map((image) => {
  return `
    <li>
      <img src="${image.url}" alt="${image.alt}">
    </li>
  `;
});

galleryList.insertAdjacentHTML('beforeend', galleryItems.join(''));


// Завдання 4
const counterValue = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let currentValue = 0;

decrementButton.addEventListener('click', () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

incrementButton.addEventListener('click', () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});