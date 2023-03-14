import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
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
              imgPath={lift}
              isBlog={false}
              title="Lift-Buddy"
              description="This online ride-sharing platform boasts a responsive front-end design, complete with an admin panel built using React and Material-UI. With the integration of Google Maps API, users can easily access directions on the map. The platform allows for full CURD functionality on profiles and posts, and users can confirm or cancel a ride from a post and message each other after confirmation. Additionally, users can easily reset their password. The back-end is powered by a Node Express server and utilizes MongoDB for the database management."
              ghLink="https://github.com/19sajib/lift-buddy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Social Media"
              description="This platform features a responsive interface built with Reactjs and CSS, allowing users to easily manage their profiles and posts through CRUD activities. The option to follow other users and interact with their posts (like or dislike) is also available, with suggestions for new users to follow. Users can only view posts from their followed users and can only engage in chat with those they follow. The backend is powered by Nodejs and Expressjs server, while MongoDB is utilized as the database."
              ghLink="https://github.com/19sajib/social-media"
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
              imgPath={pg}
              isBlog={false}
              title="Blog Website"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience."
              ghLink="https://github.com/19sajib/mern-blog-app"
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
