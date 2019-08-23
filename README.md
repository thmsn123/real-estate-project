# Real Estate Project

## Idea
Single page application for listing real estate properties for sale - apartments, houses, villas, properties and etc.

## Design
Mainly used material design libraries - bootstrap and vuetify.

## Pages
### Home 
Introductory page to customers.

### News
Renders a list of news about the region.

### Rentals
Renders a list of rentals and a filter for the type of the property, price ranges and the location .On clicking the advertisement opens a card, which contains information about the price, property type, location, construction year, description and a gallery slider. 

### Sales
Sales are organized identically to the rentals.

### About Us
Contains a brief description about the company, contacts card with a map too.

### Contact
Contact form for users in order to communicate. The user needs to be logged in order to see that menu.

### Admin
From the dropdown menu the administrator use Add New Post, where a new item in news, sales or rentals can be added by filling a form. On saving the post the needed get post action from vuex store is dispatched.
Another optin in Admin dropdown is Comments, where the administrator can read the posts submitted by the users from the contacts form. By clicking refresh a new request to the db is sent and respectfully the ui is updated.

### Auth  
User may log in or register in that menu. In case of a wrong password or email is displayed a message.

##URL
```
[a link](https://real-estate-project-e32ed.firebaseapp.com/)
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
