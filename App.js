import { Menu, MenuItem } from 'menu';
import { CoffeeMaker } from 'coffeemaker';
import { MoneyMachine } from 'moneymachine';
var coffee_maker, drink, is_enough_ingredients, is_on, is_payment_successful, menu, money_machine, options, user_choice;
money_machine = new MoneyMachine();
coffee_maker = new CoffeeMaker();
menu = new Menu();
is_on = true;
coffee_maker.report();
money_machine.report();

while (is_on) {
  options = menu.get_items();
  user_choice = input(`What would you like? (${options}): `).lower();

  if (user_choice === "report") {
    coffee_maker.report();
    money_machine.report();
  } else {
    if (user_choice === "off") {
      console.log("Machine turned off.");
      is_on = false;
    } else {
      try {
        drink = menu.find_drink(user_choice);
        is_enough_ingredients = coffee_maker.is_resource_sufficient(drink);

        if (is_enough_ingredients) {
          is_payment_successful = money_machine.make_payment(drink.cost);

          if (is_payment_successful) {
            coffee_maker.make_coffee(drink);
          }
        }
      }
      catch (e) {
        if (e instanceof AttributeError) {
          console.log("Sorry that item is not available.");
        } else {
          throw e;
        }
      }
    }
  }

  console.log();
}
