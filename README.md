# gravity

Gravity is a React-Redux App allows a user to view mountain bike trails in a targeted area and book a shuttle to take them to the top of that trail.

### Focuses

- Write squeaky clean, well refactored code using ES6 syntax.

- Make informed design decisions to create a user-friendly application.

- Become comfortable with different network requests like GET, POST, & DELETE.

- Solidify concepts with React to create clean and re-useable components.

- Become comfortable with Redux’s lifecycle, creating actions, reducers, and connecting them to React components.

- Understand and solidify concepts with React component, asynchronous code, and Redux testing.

- Get more practice doing network requests with a backend.

### Screenshots
Data Map
- To begin, the overall data flow and necessary components are mapped out.

![Data Map](src/images/gravity_data-map.png)

Design Prototype
- Home Page: Next, a design is implemented and basic user flow is considered.

![Design Prototype](src/images/gravity_initial-design.png)

Choose Your Location
- When arriving at the site, the first thing a user needs to do is pick a location.

![Homepage](src/images/gravity_home-page.png)

Choose Your Trail
- Trails will appear within 10 miles of the selected location from which a user can choose from to book a shuttle.

![Trail Page](src/images/gravity_trail-page.png)

- If the data can not be fetched, an error will appear for the user.

![Trail Page Error](src/images/gravity_trail-page-error.png)

Book Your Shuttle
- Now that a trail is selected and the user decides that is the trail they wish to hire a shuttle for, they will fill out the form with the necessary information.

![Shuttle Page Error](src/images/gravity_shuttle-page-error.png)

- Be sure to fill out all inputs or else the booking will not be made.

![Shuttle Page](src/images/gravity_shuttle-page.png)

Receive Confirmation
- Once all inputs are fill out, the booking is allowed to be made and when done so, the user will receive a confirmation message.

![Confirmation Page](src/images/gravity_confirmation-page.png)

### Tech

- This project was bootstrapped with Create React App utilizing Redux.

- Tested with Jest/Enzyme.

- Links using React Router.

### Team (solo)

- Quinne Farenwald (https://github.com/qfarenwald)

### Set Up

Clone repo.
```
git clone https://github.com/qfarenwald/gravity
```
Install dependencies.
```
npm install
```
Run browser.
```
npm start
```
