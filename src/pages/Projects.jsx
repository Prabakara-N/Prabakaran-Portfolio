import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import shoekart from "../assets/projects/shoe-shop.png";
import blogMern from "../assets/projects/blog-mern.png";
import Blog from "../assets/projects/blog.jpg";
import Expense_Tracker from "../assets/projects/expense-tracker.jpg";
import weather from "../assets/projects/weather-api.jpg";
import foodapp from "../assets/projects/food-app.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projects I Have Worked On for Learning{" "}
          <strong className="yellow">React JS</strong> and{" "}
          <strong className="yellow">MERN Stack.</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogMern}
              isBlog={false}
              title="Blog - MERN"
              description="The project involves implementing a Mongo DB(No SQL) database to store and organize user-specific blogs. I
              integrated RESTful APIs to enable seamless communication and data exchange between the client-side
              application and the server. I utilized Webpack and Babel for build process.For back-end I used Express.js in Node.js for routing and middleware, while adopting the MVC (Model-ViewController) architectural pattern. With the model handling data and business logic, the view rendering the
              user interface, and the controller managing user inputs and data flow.For front-end I utilized React.js along with Redux for efficient state management & React Dev Tools for
              effective debugging during the development process. Bootstrap framework to work on the user interface (UI)
              and create a responsive web design."
              ghLink="https://github.com/Prabakara-N/blog-website-mern"
              demoLink="https://blogs-mern.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoekart}
              isBlog={false}
              title="Shoe Shop"
              description="I finished working on this shoe-shop website project using React JS and Tailwind CSS. I get pictures from Unsplash website, users can browse products, add items to their cart, and complete the checkout process. I used routing to make it easy for users to navigate between different pages, like the productm infomation and home pages. Plus, I also included local storage to store the user's shopping cart data, so they can resume their shopping session later.To manage state changes, I used React hooks like useContext, useState, and useEffect. These hooks helped me update the state of the website based on user interactions, like when a user adds or deletes items from their cart.I also added alert messages to notify users when they add an item to their cart, delete an item, or clear their cart."
              ghLink="https://github.com/Prabakara-N/react-shoe-cart"
              demoLink="https://prabakaran-shoestore-ecommerce.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodapp}
              isBlog={false}
              title="Food App"
              description="I finished building a React food app! It uses Tailwind CSS for styling, and I implemented state management using useContext, useReducer, useState, and useEffect. I also integrated Firebase authentication, database, and storage into the app, so users can create accounts, store data, and access content securely.I used react-router-dom to handle navigation throughout the app. This made it easy to create multiple pages and ensure a seamless user experience. Additionally, I allowed the admin to add new food items and categorize them accordingly. When the admin adds a new item, the image is stored in Firebase storage. This ensures that the images are always available and load quickly for users. In addition, I stored all the cart items in local storage, so users can continue to view and manage their cart even if they leave the app and come back later."
              ghLink="https://github.com/Prabakara-N/react-food-app"
              demoLink="https://prabakaran-react-foodapp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blog}
              isBlog={false}
              title="Blog Website"
              description="I finished building a blog website using React, Bootstrap, and Sass! I added some cool features to make it more interactive and user-friendly.I used Firebase authentication to allow users to log in and create their own blog posts. And Firebase database helped me store all the blog collections, while the storage feature let users save images of their blog posts.I also used React Router DOM to make it easy for users to navigate to different pages on my website. Plus, I added alert messages that show up whenever a user creates, deletes, or updates a blog post. One of my favorite features is the ability for users to like and comment on blog posts, which makes the website more engaging. And I added a trending blogs section and a search feature, so users can easily find the content they're looking for."
              ghLink="https://github.com/Prabakara-N/react-blog-app"
              demoLink="https://prabakaran-react-blog.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Expense_Tracker}
              isBlog={false}
              title="Expense Tracker"
              description="The Expense Tracker project is a simple yet powerful web application that allows users to keep track of their expenses. It was built using React JS and utilizes the useState and useEffect hooks. The project provides a responsive and user-friendly interface and includes features such as add, delete, edit, and view transactions, as well as a summary of the user's expenses and income. The alert notification feature provides a convenient way for users to confirm that their transactions have been added, edited, or deleted successfully. The use of the useEffect hook for storing transaction data in local storage and calculating changes in the transactions makes the application more efficient and user-friendly."
              ghLink="https://github.com/Prabakara-N/react-expense-tracker"
              demoLink="https://pk-react-expense-tracker.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather API"
              description="This React.js weather app allows users to quickly retrieve weather data and current time and date information for any location by entering a city name. The app utilizes APIs and the useState hook to manage state within the application, and includes features such as input validation and loading animation to enhance user experience. Weather data is displayed in a separate component with weather icons. Overall, it's a well-designed and user-friendly app that demonstrates the power of modern web development frameworks."
              ghLink="https://github.com/Prabakara-N/react-weather-api"
              demoLink="https://pk-react-weather-api.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
