# Food Delivery
Welcome to the Food Delivery App! 

This application is built using React and provides a user-friendly interface for ordering food online.
## Features
- Browse a wide variety of food items.
- Search for specific food items.
- Add food items to the cart.
- Remove food items from the cart.
- View the total price of the cart.
- Place orders.
- User authentication (login and signup).
- Responsive design.
## Components
The app is built using a modular component-based structure. Here are some of the main components:

- Header: Displays the navigation bar with links to different sections of the app.
- FoodList: Shows a list of food items .
- Review: Display review and we can add review of about food-item
- Cart: Shows the items that added to the cart.
- Checkout: Handles the checkout process.
- Auth: Manages user authentication (login and signup).
## State Management
The app uses React's Context API for state management. The following contexts are used:

- AuthContext: Manages user authentication state.
- CartContext: Manages the state of the shopping cart.
## technology used 
- React
- TailwindCSS
## Installation
To get started with the Food Delivery App, follow these steps:

1. Firstly node is install in our system
    
    Clone the repository:
   ```bash
   git clone https://github.com/kumardee78/food-delivery.git

2.  Go to code-Editor like vsCode
    ```bash
    install react using vite
    
    npm create vite@latest
    

write the project name

    
3.  Navigate to the project directory:
    ```bash
    cd ./food-delivery

3. ***Install the dependencies:***
    ```bash
    npm install
    npm install react-router-dom
    npm install axios
    npm install react-icons
    npm install firebase

## Usage
To start the application, run the command:

npm run dev

This will run the app in the development mode.
Open http://localhost:5173 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
## Screenshots
- **Header**
  ![1](https://github.com/kumardee78/food-delivery/assets/159279737/f77738b4-2bcf-4302-9744-42e043ce0336)
- **Food-items**
  ![2](https://github.com/kumardee78/food-delivery/assets/159279737/6f738eca-7965-471b-8d6b-a8d7e05b2077)
- **Review**

      if no review is added
  ![review-1](https://github.com/kumardee78/food-delivery/assets/159279737/3b6634e2-6a20-472b-a740-fa4f67bc7ea9)
      when review added
  ![view-2](https://github.com/kumardee78/food-delivery/assets/159279737/9db84fe0-0a36-4573-88aa-1dcf45bf023f)
- **Cart**
  
   (if cart is empty)
  ![car-12](https://github.com/kumardee78/food-delivery/assets/159279737/be9d103e-0cf3-443b-bb15-833900929151)
    (when cart have items)
  ![cart-1](https://github.com/kumardee78/food-delivery/assets/159279737/7cfe7fc9-2eeb-4733-85d3-7def2fcd7086)
- **Payment**
    ![payment](https://github.com/kumardee78/food-delivery/assets/159279737/06148f65-bd32-4107-b5c2-584fd1482cd9)
- **Signup**
    ![signup](https://github.com/kumardee78/food-delivery/assets/159279737/b7bc457a-f038-4065-ba65-43366d1b2283)
- **Login**
    ![login](https://github.com/kumardee78/food-delivery/assets/159279737/d95cb5e7-ae7c-4752-9c1a-8d3eb72b25f7)
- **Footer**
    ![footer](https://github.com/kumardee78/food-delivery/assets/159279737/6fc72fa8-5065-4f07-811b-d9d188040a29)

## Acknowledgements
We would like to extend our sincere gratitude to the following individuals and organizations who have contributed to the development of the Food Delivery App:

- **[Open Source Libraries and Tools]** - For providing the powerful libraries and tools that made this project possible:
  - [React](https://reactjs.org/)
  - [React Router](https://reactrouter.com/)
  - [Redux](https://redux.js.org/) or [Context API] if you used Context for state management
  - [Axios](https://axios-http.com/) for API requests
  - [React-Icons](https://react-icons.github.io/react-icons/) for all type of icons
  - [Material-UI](https://material-ui.com/) or any other UI framework you used
- **[Online Resources and Tutorials]** - For the helpful articles, tutorials, and documentation:
  - [MDN Web Docs](https://developer.mozilla.org/)
  - [Stack Overflow](https://stackoverflow.com/)
  - [FreeCodeCamp](https://www.freecodecamp.org/)
- **[Community Contributors]** - For their feedback, bug reports, and suggestions that helped improve the app.

Special thanks to our teacher **Rohit Jain Sir** and **Ashish Sir** and friends for their unwavering support and encouragement.

Thank you all for making this project a success!

## Contributing
We welcome contributions! Please follow these steps to contribute:

- Fork the repository.
- Create a new branch (git checkout -b feature/YourFeature).
- Make your changes.
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature/YourFeature).
- Open a pull request.
