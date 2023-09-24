# SyleHub - E-commerce Website 🛍️

Welcome to SyleHub, your one-stop destination for all your fashion needs! SyleHub is a modern e-commerce website built using React, Styled Components, Node.js with Express, and MongoDB. With SyleHub, users can explore a wide range of clothing and accessories, add items to their shopping cart, and complete orders. We've integrated Stripe for seamless payment processing and use JWT for authentication to ensure a secure shopping experience.
**Website is Responsive:** SyleHub is designed to provide an optimal viewing and shopping experience across a wide range of devices, including desktops, tablets, and smartphones.

## Table of Contents 📑

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started 🚀

### Prerequisites 📋

Before you can run SyleHub on your local machine, you'll need to have the following software installed:

- Node.js: Download and install Node.js from [nodejs.org](https://nodejs.org/).

### Installation 🛠️

1. Clone the repository to your local machine using Git:
   ```git clone https://github.com/Lenroc777/stylehub.git```

2. Install the required npm packages for both the server and client:
```
cd client
npm install
cd ../api
npm install
```

3. Configure environment variables:

Create a .env file in the api directory and set the following environment variables:
- MONGO_URL= Your MongoDB connection URI.
- JWT_KEY= A secret key for JWT token generation.
- STRIPE_KEY= Your Stripe secret API key.

Create a .env file in the client directory and set the environment variable:
- REACT_APP_STRIPE= Your Stripe public API key.

4. Start the server and the client separately:
- in the api directory:
```npm start```
- in the client directory:
```npm start```
The server will run on http://localhost:5000, and the client will run on http://localhost:3000.

### Features 🚀

- **User Authentication**: Users can create accounts, log in, and log out securely using JWT authentication.

- **Product Browsing**: Browse a wide variety of clothing and accessories, organized by category.

- **Filtering**: Users can filter products based on various criteria such as category, price range, and more.

- **Shopping Cart**: Add and remove items from the shopping cart. View the cart's contents and proceed to checkout.

- **Payment Processing**: Securely process payments using Stripe integration.

### Technologies Used 💻

- **React**: A JavaScript library for building user interfaces.
- **Styled Components**: CSS-in-JS library for styling React components.
- **Node.js**: A runtime environment for executing JavaScript on the server.
- **Express**: A minimalist web application framework for Node.js.
- **MongoDB**: A NoSQL database for storing and managing data.
- **Stripe API**: Payment processing integration for secure transactions.
- **JSON Web Tokens (JWT)**: Secure user authentication and authorization.

### Usage 📦

1. Visit the SyleHub website at `http://localhost:3000` after starting the server and client.

2. Create an account or log in if you already have one. 
test account: 
**username**: test
**password**: Q@wertyuiop

3. Browse products by category and apply filters to find your desired items.

4. Add items to your cart and proceed to checkout when you're ready to make a purchase.

5. Complete the payment process using Stripe.


## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

This project was developed as part of a learning experience and was inspired by a YouTube tutorial. I would like to acknowledge and express my gratitude to the creator of the tutorial for their valuable guidance and resources.

- **YouTube Tutorial**: [React e-commerce app](https://www.youtube.com/watch?v=c1xTDSIXit8)

Feel free to check out the tutorial to gain a deeper understanding of the concepts and technologies used in this project.

## Screenshots 📸
### Homepage
#### Carousel
Desktop: 
![image](https://github.com/Lenroc777/stylehub/assets/68342166/bdf2f28b-f871-4d31-88b7-f3cc0e276d8e)
Mobile:  
![image](https://github.com/Lenroc777/stylehub/assets/68342166/556463d4-d811-4da9-8583-6ab004caa158)

#### Categories
Desktop:
![image](https://github.com/Lenroc777/stylehub/assets/68342166/8aa87898-2dae-42d4-af55-711e0f23894b)
Mobile:  
![image](https://github.com/Lenroc777/stylehub/assets/68342166/23364dd6-c701-49fc-84d8-e514abf8d02d)

#### Products
Desktop:
![image](https://github.com/Lenroc777/stylehub/assets/68342166/cd9a729c-6424-4657-a985-bf0836d63310)
Mobile:  
![image](https://github.com/Lenroc777/stylehub/assets/68342166/eb218df7-2b18-4af5-9ff7-c5cbeb5a5ec1)

#### Newsletter and footer
Desktop:
![image](https://github.com/Lenroc777/stylehub/assets/68342166/30ce4c7c-fb07-41e5-b8c0-838b77cf5522)
Mobile:  
![image](https://github.com/Lenroc777/stylehub/assets/68342166/ef6a4f35-aba3-49ff-abdb-150ad3f57740)

### Products
#### All products
Desktop:
![image](https://github.com/Lenroc777/stylehub/assets/68342166/e2cdc30e-8b60-4311-8018-fe2c6bb6d06d)
Mobile:  
![image](https://github.com/Lenroc777/stylehub/assets/68342166/ce14254a-dbb2-4b74-9b1a-6b1878b37a38)

#### Products from category "woman" with example filters and sort
Desktop: 
![image](https://github.com/Lenroc777/stylehub/assets/68342166/b6fbaac5-c81a-4e97-a2db-f1724aec4381)
Mobile:  
![image](https://github.com/Lenroc777/stylehub/assets/68342166/ce53ded9-6b48-4c97-a836-e6ca7a990f87)

#### Single product page
Desktop:
![image](https://github.com/Lenroc777/stylehub/assets/68342166/35029fae-6b19-4593-b7fc-b5d1add050ff)

Mobile:  
![image](https://github.com/Lenroc777/stylehub/assets/68342166/d9c95874-21f2-4749-ab72-d44b308ea79f)

### Cart
Desktop:
![image](https://github.com/Lenroc777/stylehub/assets/68342166/6d9c9da8-97d1-44c2-98fe-7c39bdb62fb1)
Mobile:  
![image](https://github.com/Lenroc777/stylehub/assets/68342166/af54db17-c628-488c-babc-3328cbdeeed5)

### Registration and login page
#### Register
Desktop:
![image](https://github.com/Lenroc777/stylehub/assets/68342166/632111ba-f63d-4121-9e9a-4286592a17c3)
Mobile:  
![image](https://github.com/Lenroc777/stylehub/assets/68342166/68641027-705f-4a64-9dae-e39ac1438ec6)

#### Login
Desktop:
![image](https://github.com/Lenroc777/stylehub/assets/68342166/b332fba2-24bc-47a8-a83f-d2ae89c9658c)
Mobile:  
![image](https://github.com/Lenroc777/stylehub/assets/68342166/2ecd4a2e-eaec-484e-90fd-2b0afdc8d5f0)

