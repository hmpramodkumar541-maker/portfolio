
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
     
      <div className="project-card">
        <h2>Employee Management System</h2>
        <p>
          Developed a basic employee management application
          using Django REST Framework and serializers to
          handle employee data and CRUD operations.
        </p>
        <p><strong>Technologies:</strong> Python, Django REST Framework, SQL</p>
      </div>

      <div className="project-card">
        <h2>Bank Management System</h2>
        <p>
          Created a Python mini project to practise basic
          banking operations and core programming concepts.
        </p>
        <p><strong>Technologies:</strong> Python</p>
      </div>

      <div className="project-card">
        <h2>Voter Age Validation</h2>
        <p>
          Created a Python program to validate voter eligibility
          using conditional statements and exception handling.
        </p>
        <p><strong>Technologies:</strong> Python</p>
      </div>
    </section>
  );
};

export default Projects;
