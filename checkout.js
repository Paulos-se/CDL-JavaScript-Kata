const ps = require("prompt-sync");
const prompt = ps();
const priceSetup = require("./priceSetup");

function checkout() {
  let items = priceSetup();
  let scan = true;
  let fruit;
  let question;
  let till = 0;
  let total = 0;
  while (scan) {
    fruit = prompt("Fruit to scan ");
    items.forEach((item) => {
      if (item["fruit"] === fruit) {
        item["count"]++;
        if (item["count"] % item["specialOfferQuantity"] === 0) {
          till +=
            item["fruitPrice"] -
            (item["specialOfferQuantity"] * item["fruitPrice"] -
              item["specialOfferPrice"]);
        } else {
          till += item["fruitPrice"];
        }
      }
    });
    console.log(`Running total £${till.toFixed(2)}`);
    question = prompt("scan more fruits? (y/n) ");
    if (question.toLowerCase() == "n") {
      scan = false;
      total = till;
      console.log(`Final total £${total.toFixed(2)}`);
    }
  }
}

checkout();
