class CoffeeMaker {
    /* Models the machine that makes the coffee */
    constructor() {
      this.resources = {
        "water": 300,
        "milk": 200,
        "coffee": 100
      };
    }
  
    report() {
      /* Prints a report of all resources. */
      console.log(`Water: ${this.resources["water"]}ml`);
      console.log(`Milk: ${this.resources["milk"]}ml`);
      console.log(`Coffee: ${this.resources["coffee"]}g`);
    }
  
    is_resource_sufficient(drink) {
      /* Returns True when order can be made, False if ingredients are insufficient. */
      var can_make;
      can_make = true;
  
      for (var item, _pj_c = 0, _pj_a = drink.ingredients, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
        item = _pj_a[_pj_c];
  
        if (drink.ingredients[item] > this.resources[item]) {
          console.log(`Sorry there is not enough ${item}.`);
          can_make = false;
        }
      }
  
      return can_make;
    }
  
    make_coffee(order) {
      /* Deducts the required ingredients from the resources. */
      for (var item, _pj_c = 0, _pj_a = order.ingredients, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
        item = _pj_a[_pj_c];
        this.resources[item] -= order.ingredients[item];
      }
  
      console.log(`Here is your ${order.name} ☕️. Enjoy!`);
    }
  
  }
  