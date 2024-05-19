class Size {
  constructor(name, price, calories) {
      this.name = name;
      this.price = price;
      this.calories = calories;
  }
}

class Topping {
  constructor(name, basePrice, baseCalories) {
      this.name = name;
      this.basePrice = basePrice;
      this.baseCalories = baseCalories;
      this.price = basePrice;
      this.calories = baseCalories;
  }

  adjustPriceAndCalories(size) {
      this.price = this.basePrice * (size.name === "Большая" ? 2 : 1);
      this.calories = this.baseCalories * (size.name === "Большая" ? 2 : 1);
  }
}

class Pizza {
  constructor(name, size, basePrice, baseCalories) {
      this.name = name;
      this.basePrice = basePrice;
      this.baseCalories = baseCalories;
      this.size = size;
      this.toppings = [];
  }

  addTopping(topping) {
      if (!this.toppings.some(t => t.name === topping.name)) {
          topping.adjustPriceAndCalories(this.size);
          this.toppings.push(topping);
      }
  }

  removeTopping(topping) {
      this.toppings = this.toppings.filter(t => t.name !== topping.name);
  }

  getToppingsNames() {
      return this.toppings.map(topping => topping.name);
  }

  getSize() {
      return this.size;
  }

  getName() {
      return this.name;
  }

  calculateTotalPrice() {
      const toppingsPrice = this.toppings.reduce((total, topping) => total + topping.price, 0);
      return this.basePrice + this.size.price + toppingsPrice;
  }

  calculateTotalCalories() {
      const toppingsCalories = this.toppings.reduce((total, topping) => total + topping.calories, 0);
      return this.baseCalories + this.size.calories + toppingsCalories;
  }
}

class SizeBig extends Size {
  constructor() {
      super("Большая", 200, 200);
  }
}

class SizeSmall extends Size {
  constructor() {
      super("Маленькая", 100, 100);
  }
}

class ToppingCheese extends Topping {
  constructor() {
      super("Сырный бортик", 150, 50);
  }
}

class ToppingMozarella extends Topping {
  constructor() {
      super("Сливочная моцарелла", 50, 20);
  }
}

class ToppingCheddarParmesan extends Topping {
  constructor() {
      super("Чеддер и пармезан", 150, 50);
  }
}

class PizzaMargarita extends Pizza {
  constructor(size) {
      super("Маргарита", size, 500, 300);
  }
}

class PizzaPepperoni extends Pizza {
  constructor(size) {
      super("Пепперони", size, 800, 400);
  }
}

class PizzaBavarskaya extends Pizza {
  constructor(size) {
      super("Баварская", size, 700, 450);
  }
}

let currentPizza;
let selectedPizzaIndex = 0;
const resultDisplay = document.querySelector(".cal");

function createSelectedPizza(index, size) {
  return (index === 0) ? new PizzaPepperoni(size) :
         (index === 1) ? new PizzaMargarita(size) :
                        new PizzaBavarskaya(size);
}

function addSelectedToppings(selectedToppingElements) {
  selectedToppingElements.forEach(toppingElement => {
      const textContent = toppingElement.textContent || '';
      if (textContent.includes("Сырный бортик")) {
          currentPizza.addTopping(new ToppingCheese());
      }
      if (textContent.includes("Сливочная моцарелла")) {
          currentPizza.addTopping(new ToppingMozarella());
      }
      if (textContent.includes("Чеддер и пармезан")) {
          currentPizza.addTopping(new ToppingCheddarParmesan());
      }
  });
}

function updateResultDisplay() {
  let totalPrice = currentPizza.calculateTotalPrice();
  let totalCalories = currentPizza.calculateTotalCalories();
  resultDisplay.textContent = `${totalPrice} ₽ (${totalCalories} кКал)`
}

function hideSelectedPizzaBorder() {
  pizzaCards.forEach(item => item.classList.remove("selected"));
}

function showSelectedPizzaBorder(index) {
  pizzaCards[index].classList.add("selected");
  let sizeElement = document.querySelector(".size-selected");
  let size = sizeElement.textContent === "Маленькая" ? new SizeSmall() : new SizeBig();
  currentPizza = createSelectedPizza(index, size);
  let selectedToppings = document.querySelectorAll(".toppings-selected");
  addSelectedToppings(selectedToppings);
  updateResultDisplay();
}

function hideSelectedSizeTab() {
  size.forEach(item => item.classList.remove("size-selected"));
}

function showSelectedSizeTab(index) {
  size[index].classList.add("size-selected");
  showSelectedPizzaBorder(selectedPizzaIndex);
}

function toggleToppingSelection(toppingElement) {
  toppingElement.classList.toggle("toppings-selected");
  showSelectedPizzaBorder(selectedPizzaIndex);
}

const pizzaCards = document.querySelectorAll(".pizza-card");
const size = document.querySelectorAll(".size");
const toppingCards = document.querySelectorAll(".topping");

pizzaCards.forEach((pizzaCard, index) => pizzaCard.addEventListener("click", () => {
  hideSelectedPizzaBorder();
  showSelectedPizzaBorder(index);
  selectedPizzaIndex = index;
}));

size.forEach((sizeElement, index) => sizeElement.addEventListener("click", () => {
  hideSelectedSizeTab();
  showSelectedSizeTab(index);
}));

toppingCards.forEach((toppingCard, index) => toppingCard.addEventListener("click", () => {
  toggleToppingSelection(toppingCard, index);
}));

