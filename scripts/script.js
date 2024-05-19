class Pizza {
  constructor(kind, size) {
    this.kind = kind;
    this.size = size;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  removeTopping(topping) {
    this.toppings = this.toppings.filter(item => item !== topping);
  }

  getToppings() {
    return this.toppings;
  }

  getSize() {
    return this.size;
  }

  getKind() {
    return this.kind;
  }

  get price() {
    let price = 0;
    switch (this.kind) {
      case 'Маргарита':
        price += 500;
        break;
      case 'Пепперони':
        price += 800;
        break;
      case 'Баварская':
        price += 700;
        break;
      default:
        break;
    }

    switch (this.size) {
      case 'Большая':
        price += 200;
        break;
      case 'Маленькая':
        price += 100;
        break;
      default:
        break;
    }

    this.toppings.forEach(topping => {
      switch (topping) {
        case 'сливочная моцарелла':
          price += 50;
          break;
        case 'сырный борт':
          if (this.size === 'Большая') {
            price += 300;
          } else {
            price += 150;
          }
          break;
        case 'чедер и пармезан':
          if (this.size === 'Большая') {
            price += 300;
          } else {
            price += 150;
          }
          break;
        default:
          break;
      }
    });

    return price;
  }

  get calories() {
    let calories = 0;
    switch (this.kind) {
      case 'Маргарита':
        calories += 300;
        break;
      case 'Пепперони':
        calories += 400;
        break;
      case 'Баварская':
        calories += 450;
        break;
      default:
        break;
    }

    switch (this.size) {
      case 'Большая':
        calories += 200;
        break;
      case 'Маленькая':
        calories += 100;
        break;
      default:
        break;
    }

    this.toppings.forEach(topping => {
      switch (topping) {
        case 'сливочная моцарелла':
          calories += 20;
          break;
        case 'сырный борт':
          calories += 50;
          break;
        case 'чедер и пармезан':
          calories += 50;
          break;
        default:
          break;
      }
    });

    return calories;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const calculateBtn = document.querySelector(".calculateBtn");

  if (calculateBtn) {
    calculateBtn.addEventListener("click", function (event) {
      event.preventDefault();

      const selectedPizza = document.myForm.pizza.value;
      const selectedSize = document.myForm.size.value;
      const selectedToppings = Array.from(document.myForm.topping.options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      const myPizza = new Pizza(selectedPizza, selectedSize);
      selectedToppings.forEach((topping) => {
        myPizza.addTopping(topping);
      });

      const totalPrice = myPizza.price;
      const totalCalories = myPizza.calories;
      alert(`Стоимость пиццы: ${totalPrice} рублей, Калорийность: ${totalCalories} ккал`);
    });
  }
});
