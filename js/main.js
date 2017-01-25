/* Arrays are variables that can hold more than one piece of data. Each piece of data in an array is referred to as an element. */
var myArray = [3, 4, 63, 21, 90, 37282, 72];

/* Instead of one variable, holding one piece of data, you create arrays to hold multiple pieces of data. */
var myVariable = 56;
var mySecondArray = [56, 21, 483];

/* When you should use an array:
- If you need list.
- If you have variables that are related to one another.
- If you need to group related variables together.*/
var store = 'Publix';
var groceryList = ['Oranges', 'Cereal', 'Grapes', 'Bread'];

/* Arrays in Javascript, can hold different data types. In other words, a single array can hold numbers, strings, booleans, and even other arrays. */
var mixedArray = ['Boat', 53, '4563', false, 2829];

/* Arrays that hold other arrays inside of them, are called multidimensional arrays. */
var multiArray = [
		[23, 'Alan'],
		[54, 'George'],
		[29, 'Amber'],
		[42, 'Emily']
	];

/* Each element is assigned an index number in an array. To access the element, you would reference its index number. We call this, 'accessing an array'. */
var partyGuests = ['Jeff', 'Carrie', 'Brad', 'Joey'];
document.write('<br>' + partyGuests[1]);



/* JS and most other programming laguages begin counting at 0. therefore if an element in an array is in 3rd place its index number is 2. */
document.write('<br>' + partyGuests[3]);

/* Multidimensional arrays are assigned to hold as many arrays as you want.  however its advisable to keep the level of abstraction to no more than 3. */
var luckyNumbers = [
	[59, 32, 90],
	[21, 89, 24],
	[87, 34, 77]
	];

	/* In order to access elements in an multidimensional array  you have to reference the index number of the array itself then of the element inside of the array*/
	document.write('<br>' + luckyNumbers[1][1]); // the array the element

	// find 90 and 87
	document.write('<br>' + luckyNumbers[0][2] + '<br>' + luckyNumbers[2][0]);

/* You can modify variables after they have been declared by declaring the same var again with the same name but a different value. */
var rainbow = "unicorn";
document.write('<br>' + rainbow);
var rainbow = "fairy";
document.write('<br>' + rainbow);

/* Elements inside an array can also be changed. They can be manipulated, shifted deleted you can even add elements to an array using code. */
var changedArray = ['Milk', 'Honey', 'Tea'];
document.write('<br>' + changedArray);
changedArray[2] = 'Sugar';
document.write('<br>' + changedArray);

/* Arrays come with their own methods. Some of the more popular methods are push(), pop(), shift(), and unshift(). These were made to manipulate and change arrays.*/

// push() adds to end of array
var cookieRecipe = ['Flour', 'Backing Soda', 'Sugar'];
document.write('<br>' + cookieRecipe);
cookieRecipe.push('Butter', 'Eggs', 'Vanila');
document.write('<br>' + cookieRecipe);

// pop()removes last element of array.
var soup = ['Water', 'Salt', 'carrots', 'seasonings'];
document.write('<br>' + soup);
soup.pop();
document.write('<br>' + soup);

// shift() removes 1st element of array.
var burgerRecipe = ['bun', 'lettuce', 'patty', 'onions', 'ketchup'];
document.write('<br>' + burgerRecipe);
burgerRecipe.shift();
document.write('<br>' + burgerRecipe);

// unshift() adds to beginning of array.
var pizza = ['dough', 'sauce', 'pepperoni', 'cheese'];
document.write('<br>' + pizza);
pizza.unshift();
document.write('<br>' + pizza);

/* Create a single array that populates itself using push() or unshift() based upon a user prompt. Populate your array with at least 3 elements. */

// Without Loop

/*var ingredientArray = [];

var one = prompt('Please enter an ingredient');
var two = prompt('Please enter a second ingredient');
var three = prompt('Please enter a third ingredient');

ingredientArray.push(one + two + three);
document.write('<br>' + ingredientArray);
*/
// With Loop

var groceries = [];

for (var i = 0; i < 3; i++)	{
	var items = prompt("Enter a grocery item");
	groceries.push(' ' + items);

}

document.write('<br>Groceries List:' + groceries);












