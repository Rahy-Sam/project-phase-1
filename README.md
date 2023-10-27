#  PROJECT PHASE 1
* Objectives
- It is a website to show a menu of food available in a restaurant 
- it has a shows a quantity front-end and will decrease in quantity when the buy button is clicked
# Steps used to achieve the objectives
* I created a function 'getMenu' with an empty array 'menu'
* I included the fetch method to make a request to a local server running on http://localhost:3000/menu
* It sends a GET request to the specified URL.
-When the response is received, it parses the response as JSON using .json().
-Once the data has been successfully parsed, it updates the menu array with the data by spreading it into the array (i.e., [...data]).
-It calls a function displayMenu with the updated menu array as an argument. This function is presumably responsible for rendering or displaying the menu in the user interface.
-Finally, it logs the updated menu array to the console.
* The displayMenu function is used to render the menu items on the web page based on the menuData provided as an argument
- It first selects an HTML element with the ID "menu-list" using document.getElementById("menu-list"). This is presumably the element where the menu items will be displayed.
- Then, it iterates through each item in the menuData array using forEach. For each item in the menu by:
* It creates a new list item element using document.createElement("li").

* It sets the text content of the list item to the menu.item value. This assumes that menuData contains objects with an item property.

* It adds an event listener to the list item. When this item is clicked, it calls a function displaymenuList(menu). It appears to be a typo; it should be displayMenu instead of displaymenuList. This function probably displays more details about the selected menu item.

* Finally, it appends the list item to the menuList element, which was selected earlier.
* The displaymenuList function is responsible for displaying detailed information about a menu item when a menu item is clicked
- It selects an HTML element with the ID "menu-details" using document.querySelector("#menu-details"). This is where the detailed menu information will be displayed.
- It uses the innerHTML property to set the content of the "menu-details" element. The content is constructed using a template literal, and it includes:
  * An image with the source specified by menu.image.
  * A heading displaying the menu item's title, which is menu.item.
  * A paragraph displaying the price, which is menu.price.
  * Another paragraph displaying the quantity available, which is menu.qnty.
  * A "BUY" button with the ID "btn-buy."
* It selects the "BUY" button using document.querySelector("#btn-buy").
* It adds an event listener to the "BUY" button. When the button is clicked, the following actions are taken:

-The event's default behavior is prevented using event.preventDefault() to prevent the button from submitting a form or navigating to a new page.

-It creates a copy of the menu object with the line const item = {...menu}.

-It logs the item to the console.

-It makes a PATCH request to update the quantity of the selected menu item on the server. It sends the updated quantity by subtracting 1 from the original item.qnty value. The fetch request is made to http://localhost:3000/menu/{item.id}, which presumably updates the server data.
* Remember to run the json-server before running the website

# The link used to the project webpage
http://127.0.0.1:5500/index.html

# License
[MIT LICENSE]

# Author info
[Raymond Mwaiki](https://github.com/Rahy-Sam/project-phase-1)
