# **Juiccy - An online beverages website**
## Description
This project is related to the food industry (Juices, coffee, beverages, etc.). It's a full stack web development project. It aims to create a responsive and dynamic webapp/website. This website offers a wide range of features and functionalities to enhance the user experience. Users can browse through a diverse selection of beverages, coffee, etc. and can add their favourite items in the cart along with the quantity needed. The website also allows users to see details of each item along with the ratings. Currently data of items are static.

## Features
1. **Responsive Design:** The website/application is designed to be responsive and adapt to different screen sizes and devices, providing an optimal user experience.
2. **Dynamic Content:** The content of the website/application is generated dynamically, allowing for easy updates and modifications.
3. **User Sign In/ Sign Up:** Users can create accounts, log in, and access personalized features and content and can also change their personal detail with the help of the password.

## TechStack Used
1. **Front-end** :-  React.js, HTML, CSS, Javascript
2. **Back-end** :-  Node.js, Express.js
3. **Database** :-  MongoDB
4. **Others** :-  bcryptjs, react-router-dom, react-router-dom-hash-link, cookie-parser, jsonwebtoken, multer, nodemailer, @reduxjs/toolkit
5. **API Testing** :-  Postman
6. **Editor** :-  VS Code

## Getting Started
To work on this project follow the given steps as shown below.

### Pre-requisites
1. Must have installed [Vs Code](https://code.visualstudio.com/) in your system.
2. Must have all the setup ready in [MongoDB Atlas](https://www.mongodb.com/atlas/database).

### Installation
1. Open your terminal/command prompt.
2. Clone the repository by the following code.
```bash
git clone https://github.com/username/project.git
```
> Username: abhayanand08, Project: Juiccy

3. After cloning navigate to your project folder/directory.
```bash
cd Juiccy
```

4. Thereafter to the client directory.
```bash
cd client
```

5. Now install the necessary dependencies.

   * For Windows:
   ```bash
   npm install
   ```
   * For MacOS:
   ```bash
   yarn install
   ```
   
6. Configure the environment variables in the server directory under config folder.

    * Change the following data in the .env file.
       * PORT: ``` 8000 ```
       * DB_URL: ``` Your mongodb connection string ```
       * SMPT_MAIL: ``` Your email id ```
       * SMPT_PASSWORD: ``` Your smpt password ```

7. Start the development server
> Goto to client directory and type the following command   
* Client
```bash
npm start
```
or,
```bash
yarn start
```      
> Goto to server directory and type the following command   
* Server
```bash
npm run dev
```
       
## Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature/bug fix: ``` git checkout -b feature-name ```
3. Commit your changes: ``` git commit 'Add some feature' ```
4. Push to the branch: ``` git push origin feature-name ```
5. Submit a pull request.

## Contact
If you have any questions or suggestions, feel free to contact.
* Name: Abhay Anand
* Email: [abhayanandjsr@gmail.com](mailto:user@example.com)
