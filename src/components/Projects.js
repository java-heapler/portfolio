// src/components/Projects.js
import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/Projects.css';

const projectData = [
  { title: 'Ants Vs. SomeBees', description: 'Developed a tower defense game using Python, focusing on **OOP** and **functional programming paradigms**.', link: '#' },
  { title: 'Cats', description: 'Created a typing game using Python, implemented **algorithms** to calculate typing speed and accuracy.', link: '#' },
  { title: 'Hog', description: 'Built a dice game using Python, incorporating **strategic decision-making** and **probabilistic analysis**.', link: '#' },
  { title: 'Scheme', description: 'Implemented an interpreter for the Scheme language using Python, focusing on **parsing** and **evaluation**.', link: '#' },
  { title: 'Ataxx', description: 'Created a board game with a **graphical user interface** using **Java** and **Java Swing**.', link: '#' },
  { title: 'Enigma', description: 'Simulated the Enigma machine using **Java**, focusing on **cryptographic algorithms**.', link: '#' },
  { title: 'Gitlet', description: 'Developed a version control system similar to Git using **Java**, implemented **core version control features**.', link: '#' },
  { title: 'Philphix', description: 'Developed a text processing tool using **C**, focusing on **efficient text parsing** and **replacement algorithms**.', link: '#' },
  { title: 'Pacman', description: 'Developed an AI for Pacman using Python, implemented **search algorithms** and **reinforcement learning techniques**.', link: '#' },
  { title: 'Social Buzz Analyzer', description: 'Performed sentiment analysis using **NLP techniques** in Python with **NLTK** and **spaCy**, visualized trends in **Jupyter Notebook**.', link: '#' },
  { title: 'Smart Sales Predictor', description: 'Built a forecasting model using **ARIMA** and **Prophet** in Python, improved accuracy by 20%, preprocessed data with **pandas**.', link: '#' },
  { title: 'Customer Insight Clustering', description: 'Implemented K-Means clustering in Python, analyzed data with **pandas**, visualized clusters using **matplotlib** and **seaborn**.', link: '#' },
  { title: 'Proactive Maintenance Predictor', description: 'Developed time-series predictive maintenance model in Python, achieved **95% accuracy**.', link: '#' },
  { title: 'Sales Regression Analysis', description: 'Conducted **linear regression** and **hypothesis testing** on sales data using **R**.', link: '#' },
  { title: 'Predictive Modeling for MNIST and College Data', description: 'Developed and evaluated models including **Logistic Regression**, **LDA**, **QDA**, **Linear Regression**, **Ridge**, and **Lasso** using Python and **scikit-learn** on **MNIST** and college admission datasets.', link: '#' },
  { title: 'Advanced Machine Learning Techniques for Data Analysis', description: 'Applied **PCA**, **k-means clustering**, **SVMs**, and **Kernel PCA** using Python, R, and **scikit-learn** on datasets like **MNIST** for **dimensionality reduction**, **clustering**, and **classification**.', link: '#' },
  { title: 'Ensemble Methods and SVM for Advanced Data Analysis', description: 'Implemented **Bagging**, **Boosting**, **SVMs**, and **Random Forests** using Python, **scikit-learn**, and **pandas** on **MNIST** dataset for **classification** and **variance reduction**.', link: '#' },
  { title: 'Neural Network Digit Classification', description: 'Developed **neural networks** for digit classification using Python and **NumPy**, implementing **perceptron**, **backpropagation**, and **RNNs** for tasks including **regression** and **language identification**.', link: '#' },
  { title: 'Neural Networks and Learning Theory Applications', description: 'Explored advanced techniques like **FNNs**, **CNNs**, **Autoencoders**, and **GANs** using Python, **PyTorch**, and **scikit-learn**. Analyzed datasets like **CIFAR-10** and **Fashion MNIST**, implementing **dropout** and various optimizers for enhanced performance.', link: '#' }
];

function Projects() {
  return (
    <section id="projects" className="section projects">
      <Fade bottom>
        <h2>Projects</h2>
        <ul className="projects-list">
          {projectData.map((project, index) => (
            <li key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">Learn More</a>
            </li>
          ))}
        </ul>
      </Fade>
    </section>
  );
}

export default Projects;
