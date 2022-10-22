class MenuItem {
    /* Models each Menu Item. */
    constructor(name, water, milk, coffee, cost) {
      this.name = name;
      this.cost = cost;
      this.ingredients = {
        "water": water,
        "milk": milk,
        "coffee": coffee
      };
    }
  
  }
  
  class Menu {
    /* Models the Menu with drinks. */
    constructor() {
      this.menu = [new MenuItem({
        "name": "latte",
        "water": 200,
        "milk": 150,
        "coffee": 24,
        "cost": 2.5
      }), new MenuItem({
        "name": "espresso",
        "water": 50,
        "milk": 0,
        "coffee": 18,
        "cost": 1.5
      }), new MenuItem({
        "name": "cappuccino",
        "water": 250,
        "milk": 50,
        "coffee": 24,
        "cost": 3
      })];
    }
  
    get_items() {
      /* Returns all the names of the available menu items */
      var options;
      options = "";
  
      for (var item, _pj_c = 0, _pj_a = this.menu, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
        item = _pj_a[_pj_c];
        options += `${item.name}/`;
      }
  
      return options;
    }
  
    find_drink(order_name) {
      /* Searches the menu for a particular drink by name. Returns that item if it exists, otherwise returns None */
      for (var item, _pj_c = 0, _pj_a = this.menu, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
        item = _pj_a[_pj_c];
  
        if (item.name === order_name) {
          return item;
        }
      }
    }
  
  }
  