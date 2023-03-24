import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import shoekart from "../assets/projects/shoe-shop.png";
import netflix from "../assets/projects/netflix.jpg";
import Ecommerce from "../assets/projects/e-commerce.jpg";
import Expense_Tracker from "../assets/projects/expense-tracker.jpg";
import weather from "../assets/projects/weather-api.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoekart}
              isBlog={false}
              title="Shoe Shop"
              description="I just finished working on this shoe-shop website project using React JS and Tailwind CSS. I get pictures from Unsplash website, users can browse products, add items to their cart, and complete the checkout process. I used routing to make it easy for users to navigate between different pages, like the productm infomation and home pages. Plus, I also included local storage to store the user's shopping cart data, so they can resume their shopping session later.To manage state changes, I used React hooks like useContext, useState, and useEffect. These hooks helped me update the state of the website based on user interactions, like when a user adds or deletes items from their cart.I also added alert messages to notify users when they add an item to their cart, delete an item, or clear their cart."
              ghLink="https://github.com/Prabakara-N/react-shoe-cart"
              demoLink="https://prabakaran-shoestore-ecommerce.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="E-Commerce Store"
              description="I just finished working on this e-commerce website project using React JS and Tailwind CSS. It's a fake store API where users can browse products, add items to their cart, and complete the checkout process. I used routing to make it easy for users to navigate between different pages, like the productm infomation and home pages. Plus, I also included local storage to store the user's shopping cart data, so they can resume their shopping session later.To manage state changes, I used React hooks like useContext, useState, and useEffect. These hooks helped me update the state of the website based on user interactions, like when a user adds or deletes items from their cart.I also added alert messages to notify users when they add an item to their cart, delete an item, or clear their cart."
              ghLink="https://github.com/Prabakara-N/react-ecommerce"
              demoLink="https://prabakaran-ecommerce.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="In this Netflix clone project, I used React and Tailwind CSS to create a user interface that resembles the popular streaming platform. To handle client-side routing, I used the Browser Router Dom library. And to allow users to create accounts, log in, and access certain features of the app, I integrated Firebase Authentication. The favorite button and scroll functionality make it easier for users to find and interact with their favorite shows, while the random background image adds some variety to the homepage. Overall, these features demonstrate my ability to work with third-party APIs and libraries, as well as my commitment to creating a polished and user-friendly app.Overall, this project allowed me to practice my React and CSS skills, as well as gain experience working with Firebase and integrating third-party libraries into a React app."
              ghLink="https://github.com/Prabakara-N/netflix-clone-firebase"
              demoLink="https://prabakara-netflix-clone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Expense_Tracker}
              isBlog={false}
              title="Expense Tracker"
              description="The Expense Tracker project is a simple yet powerful web application that allows users to keep track of their expenses. It was built using React JS and utilizes the useState and useEffect hooks. The project provides a responsive and user-friendly interface and includes features such as add, delete, edit, and view transactions, as well as a summary of the user's expenses and income. The alert notification feature provides a convenient way for users to confirm that their transactions have been added, edited, or deleted successfully.The project also includes two radio buttons, one for income and one for expenses. When the user selects the income radio button, the entered value will be added as a positive amount, and when the user selects the expense radio button, the entered value will be added as a negative amount. The use of the useEffect hook for storing transaction data in local storage and calculating changes in the transactions makes the application more efficient and user-friendly."
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Expense_Tracker}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
