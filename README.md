# Lesson 3 Make A todo list App

link of the ui design [UI LINK HERE](https://tailwindcss.com/docs/guides/create-react-app)

## Step 1

- Fork the repository
- Clone the forked repository
- Clear all files inside the src except for app.js and index.js
- Make 2 folders inside src [views, components]
- Move the App.js files inside views
- Reconfigure the files and fix all errors

## Step 2

- Install Tailwind css in the react project, follow this guide link: [TAILWIND LINK HERE](https://tailwindcss.com/docs/guides/create-react-app)
- Install tailwind css intellisense extension
- Create a folder inside the components, name it common.
- Create a file name navbar.js inside the common folder
- create a navbar functional component in the the navbar.js
- add a props called setView
- make a function called viewHandler with a parameter named status
- call the navbar component to the app.js

## Step 3

- Create two files inside the view folder [todo_list_view.js, todo_list_completed_view]
- create functional components in each file
- put a html p tag in each components and put some texts
- call both functional component in the app.js

### CONDITIONAL RENDERING

- Create a state inside the app.js name pageNavigator
- put the pageNavigator setter in the props of the navbar
- apply conditional rendering

### Week Assignment

- Play with the tailwind
- Design a html input tag using tailwind
- make a button name add todo list and style it using tailwind
- display the added todo item and style it if possible
