const ps = require("prompt-sync");
const prompt = ps();

function setPrice() {
  let fruit;
  let fruitPrice;
  let specialOfferPrice;
  let question;
  let fruitsArray = [];
  let fruitsObject = {};
  let ask = true;
  while (ask) {
    fruit = prompt("Fruit name ");
    fruitPrice = prompt(`price of ${fruit} `);
    specialOfferQuantity = prompt(`${fruit} special offer quantity `);
    specialOfferPrice = prompt(`${fruit} special offer price `);
    question = prompt("add more fruits? (y/n) ");
    if (question.toLowerCase() == "n") {
      ask = false;
    }
    fruitsObject["fruit"] = fruit;
    fruitsObject["fruitPrice"] = parseFloat(fruitPrice);
    fruitsObject["specialOfferPrice"] = parseFloat(specialOfferPrice) || 0;
    fruitsObject["specialOfferQuantity"] = Number(specialOfferQuantity);
    fruitsObject["count"] = 0;
    fruitsArray.push(fruitsObject);
    fruitsObject = {};
  }
  return fruitsArray;
}

module.exports = setPrice;
