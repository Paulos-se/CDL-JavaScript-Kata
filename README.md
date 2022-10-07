## CDL JavaScript Kata

Answer to the questions - Because the pricing changes frequently, we need to be able to pass in a set of pricing rules each time we start handling a checkout transaction. Therefore I used a the "prompt-sync" library to retrieve users input in the priceSetup function. Enabling me to input as many fruits as I want and set the unit price and the special offer quantity and special offer price for each fruit.

I seperated the main function into two functions which would make it easier to debug. And given more time I would write tests for each function.

### Usage

Implement the code for a checkout system that handles pricing schemes such as “apples cost 50 pence, three apples cost £1.30.”

Implement the code for a basket that calculates the total price of a number of items. In a normal store, things are identified using Stock Keeping Units, or SKUs. In our store, we’ll use individual letters of the alphabet (A, B, C, and so on). Our goods are priced individually. In addition, some items are multi-priced: buy ‘n’ of them, and they’ll cost you ‘y’ pence. For example, item ‘A’ might cost 50 pence individually, but this week we have a special offer: buy three ‘A’s and they’ll cost you £1.30.

Use these prices for the sample:

Item Unit Price (pence) Special Price (pence)

A 50 3 for 130

B 30 2 for 45

C 20

D 15

Our checkout accepts items in any order, so that if we scan a B, an A, and another B, we’ll recognize the two B’s and price them at 45 (for a total price so far of 95). Because the pricing changes frequently, we need to be able to pass in a set of pricing rules each time we start handling a checkout transaction.

The solution should allow for items to input within a simple user interface, and allow for a final total to be calculated and for a running total after each item is added to the basket

Please call the checkout function and then input the name of the fruit, unit price, special offer quantity and special offer price if there's any, consecutively after each prompt. Then answer "y" or "n" to the following prompt asking whether you want to "add more fruits?".
Write "y" if you want to add more fruits and set the prices. If not proceed to writing the name of the fruit you want to scan at the next prompt. Answer whether you want to scan more fruits. Then running total will be calculated everytime you scan a fruit. And after you finished scanning your last item the final total will be displayed.
