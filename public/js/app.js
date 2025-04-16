//! create claa person
class Person {
  constructor(name, location, money, rightHand) {
    this.name = name;
    this.location = location;
    this.money = money;
    this.rightHand = rightHand;
  }
  move(location) {
    this.location = location.name;
    location.people.push(this);
    console.log(`${yahya.name} is currentlly at ${yahya.location}`);
  }
  payForItem(item) {
    this.money -= item.price;
  }
  cut(item) {
    if (item.state == "whole") {
      if (item.name == "onion" || item.name == "cheese") {
        console.log(`${this.name} cut the ${item.name}`);
        item.state = "cut";
      } else if (item.name == "egg" || item.name == "spice") {
        console.log(`${this.name} ground the ${item.name}`);
        item.state = "ground";
      }
    } else {
      if (item.name == "onion" || item.name == "cheese") {
        console.log(`${item.name} is already cutted`);
      } else if (item.name == "egg" || item.name == "spice") {
        console.log(`${item.name} is already ground`);
      }
    }
  }
}
//! create class ingredients
class Ingredients {
  static ingredientArray = [];
  constructor(name, state, price) {
    (this.name = name), (this.state = state), (this.price = price);
    Ingredients.ingredientArray.push(this);
  }
}

//! create class bowl
class Bowl {
  constructor(name, content) {
    this.name = name;
    this.content = content;
  }
  mix(mixName) {
    this.content = [
      {
        name: mixName,
        state: "Not Cooked",
      },
    ];
  }
}
class Pan{
    constructor(name , content){
        this.name = name
        this.content = content
    }
    cook(){
        setTimeout(() => {
            this.content.state = 'cooked'
            console.log(`finally , now the state of the omellete is ${this.content.state} you can eat it`);
            
        }, 4000);
    }
}

//! create instance from class Person
let yahya = new Person("yahya", "work", 500, []);
const yhahaMoney = yahya.money;

//! create instance from bowl class
let bowl_1 = new Bowl("bowl 1", []);

//! create instance from pan class
let pan_1 = new Pan('pan 1' , [])

//! create instances from ingredients class
let onion = new Ingredients("onion", "whole", 5);
let egg = new Ingredients("egg", "whole", 10);
let spice = new Ingredients("spice", "ground", 5);
let cheese = new Ingredients("cheese", "whole", 10);

//! create home object
let home = {
  name: "home",
  people: [],
};

//! create grocery store object
let groceryStore = {
  name: "grocery store",
  people: [],
  baskets: [
    {
      type: "big basket",
      content: [],
    },
    {
      type: "small basket",
      content: [],
    },
  ],
  ingredients: [],
};
//! push all ingredient in grocery store.ingrideient
for (let i = 0; i < Ingredients.ingredientArray.length; i++) {
  groceryStore.ingredients.push(Ingredients.ingredientArray[i]);
}

//* Actions is start
yahya.move(groceryStore);
//^ yahya took basket grom grocery store and remove basket from grocery store
yahya.rightHand[0] = groceryStore.baskets.pop();
console.log(`${yahya.name} took the ${yahya.rightHand[0].type}`);

//^ put all ingredient yahya need in her rightHand basket content
for (let i = 0; i < groceryStore.ingredients.length; i++) {
  yahya.rightHand[0].content.push(groceryStore.ingredients[i]);
  console.log(
    `${yahya.name} put ${groceryStore.ingredients[i].name} in the ${yahya.rightHand[0].type}`
  );
}
//^ yahya  paid all teh ingredient take
for (let i = 0; i < yahya.rightHand[0].content.length; i++) {
  yahya.payForItem(yahya.rightHand[0].content[i]);
  console.log(
    `${yahya.name} paid ${yahya.rightHand[0].content[i].price} DH for ${yahya.rightHand[0].content[i].name}`
  );
}

//^ for loop for calc total ingredients price
let total = 0;
for (let i = 0; i < yahya.rightHand[0].content.length; i++) {
  total += yahya.rightHand[0].content[i].price;
}

//^ log yahya money after buy the ingredients
console.log(
  `${yahya.name} before buy the components had ${yhahaMoney} DH ,but  after that he has now ${yahya.money} DH , because total items price is ${total} DH`
);

//^ yahya back to home
yahya.move(home);
//^ for make yahya leave grocery store
groceryStore.people.splice(yahya, 1);

//^ put all right hand content in bowl
const righContentLength = yahya.rightHand[0].content.length;
let i = 0;
while (i < righContentLength) {
  bowl_1.content.push(yahya.rightHand[0].content[i]);
  console.log(`${yahya.name} put ${bowl_1.content[i].name} in ${bowl_1.name}`);

  i++;
}
//^ make the right hand content empty
yahya.rightHand[0].content = [];

//^ yahya go to grocery store
yahya.move(groceryStore);
//^ for make yahya leave home
home.people.splice(yahya, 1);
//^ return the basket to the grocery store
groceryStore.baskets.push(yahya.rightHand.pop());
console.log(
  `${yahya.name} return the ${groceryStore.baskets[0].type} to the ${groceryStore.name}`
);
//^ yahya back to home
yahya.move(home);
//^ for make yahya leave grocery store
groceryStore.people.splice(yahya, 1);

//^ yahya cut or ground bowl_1 content
yahya.cut(onion);
yahya.cut(egg);
yahya.cut(spice);
yahya.cut(cheese);

//^ create a mix using mix method
bowl_1.mix("omelette");
console.log(
  `now we have in the ${bowl_1.name} an ${bowl_1.content[0].name} mix`
);

//^ move the bowl content in the pan content
pan_1.content = bowl_1.content.pop()
console.log(`${yahya.name} put the ${pan_1.content.name} in ${pan_1.name} , with ${pan_1.content.state} state`);


//^ use cook method
pan_1.cook()






