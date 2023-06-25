# :ramen: Menu Builder App :ramen:
### Promineo Tech Front End Software Development Bootcamp Project
### :computer: [Demo Site](https://main.d3rbvozhdus21q.amplifyapp.com/)
### :movie_camera: [Demo Video](https://youtu.be/bhTtbnWjoio)


## :notebook: Description

##### The Menu Builder app is a CRUD app which allows users to create a demo of a restaurant menu.

The user creates a category with the form on the lefthand side which is then rendered in the demo menu card on the right. The user can update each category by creating and deleting menu items within each category. The user can also delete an entire category and its data.

##### This app was created with React as a project for the Front End Software Developer bootcamp program at [Promineo Tech](https://promineotech.com/).

## :star: Features

##### New Menu Category Form
* Takes the name of the new category to be rendered in the Menu Demo.

##### Delete Category Button
* Red button with trashcan icon attached to each category title deletes the menu category from the API.

##### Add Menu Item Modal
* Show/Hide of modal is handled by the green "+" button.
* Form takes the item name and price to be rendered in the Menu Demo under the category

##### Delete Menu Item Button
* Red button with trashcan icon attached to each menu item, updates the category with the item removed.

## :rocket: How to Use

### Demo

Access a demo of this app [here](https://main.d3rbvozhdus21q.amplifyapp.com/).

### `npm start`

If running on your local host, run `npm install`, then `npm start`.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## :jigsaw: Technologies
This app was created using React and uses a mock API on [mockapi.io](https://mockapi.io) to handle HTTP requests. [Bootstrap](https://getbootstrap.com/) and [React-Bootstrap](https://react-bootstrap.github.io/) were used as syling libraries. The demo of this app was deployed using [AWS Amplify](https://aws.amazon.com/amplify/).
