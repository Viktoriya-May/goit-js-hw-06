const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


     const listEl = document.querySelector("#ingredients");

      const itemEl =  ingredients.map(ingredient => {
      const element = document.createElement("li");
      element.textContent = ingredient;
      element.classList.add("item");
      return element;
    });

    listEl.append(...itemEl);


