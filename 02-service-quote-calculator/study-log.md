# Study Log

## Day 1 - Cleaning Quote Calculator

Today I built a quote calculator using HTML and JavaScript.

### What I practised

- Getting HTML elements with getElementById
- Reading input values
- Converting strings to numbers
- Validating form fields
- Creating objects
- Saving objects inside an array
- Rendering a list on the page
- Saving data with localStorage
- Deleting items from an array

### What I learned

I learned how to connect HTML inputs with JavaScript and create a simple app that stores quotes in the browser.

### Next step

Next, I want to improve the design with CSS and make the project look more professional.

## Day 2 - localStorage, Delete Buttons and Basic Styling

Today I continued improving my Cleaning Quote Calculator project.

### What I built

- I saved quotes using localStorage.
- I loaded saved quotes when the page refreshes.
- I added a Delete button for each quote.
- I added a Clear All Quotes button.
- I improved the layout using CSS.
- I created cards for the form and the saved quotes list.
- I added different button styles for different actions.
- I made the Delete button smaller so it fits better next to each quote.
- I added a summary dashboard to show the total number of quotes, the total quoted amount and the average quote value.

### What I practised

- localStorage
- JSON.stringify()
- JSON.parse()
- Arrays
- splice()
- Functions
- Event listeners
- DOM manipulation
- Creating elements with JavaScript
- Adding classes with classList.add()
- Basic CSS styling
- Git commits and GitHub push

### What I learned

I learned how to save data in the browser using localStorage, so the quotes do not disappear when the page refreshes.

I also learned how to remove items from an array using splice() and update the page immediately by calling renderQuotes() again.

I improved the design with CSS and started to understand how HTML, CSS and JavaScript work together in a real project.

### Next step

Next, I want to keep improving the design and make the project more professional.

I also want to keep practising English while coding, especially technical words and useful phrases for IT jobs.

## Day 3 - Business Summary Dashboard

Today I added a small summary dashboard to my quote calculator.

### What I built

- I created three summary cards.
- I displayed the total number of quotes.
- I displayed the total quoted amount.
- I displayed the average quote value.
- I made the summary responsive for smaller screens.

### What I practised

- CSS Grid
- Responsive design
- Dynamic HTML with innerHTML
- Calculating values from an array
- Using reduce()
- Using a ternary operator

### What I learned

I learned how to create a simple dashboard using JavaScript and CSS.

I also learned how to calculate business metrics from an array of objects and display them in a cleaner visual layout.

## Day 3 - Created Date for Quotes

Today I added a created date to each quote.

### What I built

- I added a createdAt property to each quote object.
- I used new Date().toLocaleString() to create the date and time.
- I displayed the created date in the saved quotes list.
- I handled old quotes without a date by showing "No date".
- I tested that the date stays saved after refreshing the page.

### What I practised

- JavaScript Date
- Object properties
- localStorage
- Rendering dynamic data
- Fallback values using ||

### What I learned

I learned how to save the date and time when a quote is created.

I also learned how to use a fallback value to avoid showing undefined for older quotes.