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
![image](https://github.com/Lenroc777/stylehub/assets/68342166/78732516-1ba8-4aaf-8cc5-01ebec50ccca)
![image](https://github.com/Lenroc777/stylehub/assets/68342166/328d7d7c-3b22-41b3-a6e5-5de34f04a881)

#### Categories
Desktop:
![image](https://github.com/Lenroc777/stylehub/assets/68342166/2fa58c17-f9f6-4939-bed6-1017dc6b884c)

Mobile:  
![image](https://github.com/Lenroc777/stylehub/assets/68342166/09dcccec-a104-4999-b7b7-0c74532e2287)

![image](https://github.com/Lenroc777/stylehub/assets/68342166/3f8001f9-1c85-48e2-880e-d41419c022a9)

#### Products
Desktop:
![image](https://github.com/Lenroc777/stylehub/assets/68342166/628d584c-c978-4c8c-bf32-74d4e9b01732)

Mobile:  
![image](https://github.com/Lenroc777/stylehub/assets/68342166/732db934-32e5-4290-bb2e-58c0dc16683c)

![image](https://github.com/Lenroc777/stylehub/assets/68342166/82b87cce-3705-486a-8032-c92435217537)


#### Newsletter and footer
Desktop:
![image](https://github.com/Lenroc777/stylehub/assets/68342166/c609faa5-21db-43a3-9fc0-23d0b9b1e396)

Mobile:  
![image](https://github.com/Lenroc777/stylehub/assets/68342166/a77c6247-e4fe-4bf7-98f4-a31aaa44b5a5)
![image](https://github.com/Lenroc777/stylehub/assets/68342166/46dc8838-d15d-43ec-9e4f-3a61711b1336)


### Products
#### All products
Desktop:
![image](https://github.com/Lenroc777/stylehub/assets/68342166/7c749921-8be0-48d8-bf21-4ff9ea6b1f68)

Mobile:  
![image](https://github.com/Lenroc777/stylehub/assets/68342166/501487b5-a007-47cd-9e98-7f5f189342d8)
![image](https://github.com/Lenroc777/stylehub/assets/68342166/05ba6dee-a27b-41a7-92eb-b3b4182c24ae)


#### Products from category "woman" with example filters and sort
Desktop: 
![image](https://github.com/Lenroc777/stylehub/assets/68342166/8d1774d5-b36e-40db-a95d-c07f15be7fbb)

Mobile:  
![image](https://github.com/Lenroc777/stylehub/assets/68342166/773b72ea-0ade-4c2f-b3b3-b58254b910c2)

![image](https://github.com/Lenroc777/stylehub/assets/68342166/c1aad211-78e3-47aa-93b9-5f976cd39df4)

#### Single product page
Desktop:
![image](https://github.com/Lenroc777/stylehub/assets/68342166/1bab68a4-3cd8-494f-b513-1f3d45565055)

Mobile:  
![image](https://github.com/Lenroc777/stylehub/assets/68342166/500cf354-af21-431d-8891-5b23b1e06b07)


### Cart
Desktop:
![image](https://github.com/Lenroc777/stylehub/assets/68342166/bba8a9e2-bbcd-4bbb-85f9-6c346840acec)
![image](https://github.com/Lenroc777/stylehub/assets/68342166/d8c30684-8342-4a34-8f77-e3f286c6a4da)

Mobile:  
![image](https://github.com/Lenroc777/stylehub/assets/68342166/f5b37eb8-e5b7-441d-8c98-4ddb46b76b60)
![image](https://github.com/Lenroc777/stylehub/assets/68342166/be44c5ef-828c-452f-a4c5-9b12b4134526)


### Registration and login page
#### Register
Desktop:
![image](https://github.com/Lenroc777/stylehub/assets/68342166/ca07698d-b62d-4e6f-b0d8-49052185cc7c)
Mobile:  
![image](https://github.com/Lenroc777/stylehub/assets/68342166/2bd47f78-63cf-40d6-9c64-ae098c10fe24)


#### Login
Desktop:
![image](https://github.com/Lenroc777/stylehub/assets/68342166/0c878c58-6887-4255-b70f-a0fb230cd974)

Mobile:  
![image](https://github.com/Lenroc777/stylehub/assets/68342166/1c8f2138-7f36-4334-8627-a927a514c101)


