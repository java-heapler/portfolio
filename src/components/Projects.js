// src/components/Projects.js
import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/Projects.css';

const projectData = [
  { title: 'Ants Vs. SomeBees', description: 'Developed a tower defense game using Python, focusing on OOP and functional programming paradigms.', link: 'https://github.com/joseph-heupler/ants-vs-somebees' },
  { title: 'Cats', description: 'Created a typing game using Python, implemented algorithms to calculate typing speed and accuracy.', link: 'https://github.com/joseph-heupler/cats' },
  { title: 'Hog', description: 'Built a dice game using Python, incorporating strategic decision-making and probabilistic analysis.', link: 'https://github.com/joseph-heupler/hog' },
  { title: 'Scheme', description: 'Implemented an interpreter for the Scheme language using Python, focusing on parsing and evaluation.', link: 'https://github.com/joseph-heupler/scheme' },
  { title: 'Ataxx', description: 'Created a board game with a graphical user interface using Java and Java Swing.', link: 'https://github.com/joseph-heupler/ataxx' },
  { title: 'Enigma', description: 'Simulated the Enigma machine using Java, focusing on cryptographic algorithms.', link: 'https://github.com/joseph-heupler/enigma' },
  { title: 'Gitlet', description: 'Developed a version control system similar to Git using Java, implemented core version control features.', link: 'https://github.com/joseph-heupler/gitlet' },
  { title: 'Philphix', description: 'Developed a text processing tool using C, focusing on efficient text parsing and replacement algorithms.', link: 'https://github.com/joseph-heupler/philphix' },
  { title: 'Pacman', description: 'Developed an AI for Pacman using Python, implemented search algorithms and reinforcement learning techniques.', link: 'https://github.com/joseph-heupler/pacman' },
  { title: 'Social Buzz Analyzer', description: 'Performed sentiment analysis using NLP techniques in Python with NLTK and spaCy, visualized trends in Jupyter Notebook.', link: 'https://github.com/joseph-heupler/social-buzz-analyzer' },
  { title: 'Smart Sales Predictor', description: 'Built a forecasting model using ARIMA and Prophet in Python, improved accuracy by 20%, preprocessed data with pandas.', link: 'https://github.com/joseph-heupler/smart-sales-predictor' },
  { title: 'Customer Insight Clustering', description: 'Implemented K-Means clustering in Python, analyzed data with pandas, visualized clusters using matplotlib and seaborn.', link: 'https://github.com/joseph-heupler/customer-insight-clustering' },
  { title: 'Proactive Maintenance Predictor', description: 'Developed time-series predictive maintenance model in Python, achieved 95% accuracy.', link: 'https://github.com/joseph-heupler/proactive-maintenance-predictor' },
  { title: 'Sales Regression Analysis', description: 'Conducted linear regression and hypothesis testing on sales data using R.', link: 'https://github.com/joseph-heupler/sales-regression-analysis' },
  { title: 'Predictive Modeling for MNIST and College Data', description: 'Developed and evaluated models including Logistic Regression, LDA, QDA, Linear Regression, Ridge, and Lasso using Python and scikit-learn on MNIST and college admission datasets.', link: 'https://github.com/joseph-heupler/predictive-modeling-mnist-college' },
  { title: 'Advanced Machine Learning Techniques for Data Analysis', description: 'Applied PCA, k-means clustering, SVMs, and Kernel PCA using Python, R, and scikit-learn on datasets like MNIST for dimensionality reduction, clustering, and classification.', link: 'https://github.com/joseph-heupler/advanced-ml-techniques' },
  { title: 'Ensemble Methods and SVM for Advanced Data Analysis', description: 'Implemented Bagging, Boosting, SVMs, and Random Forests using Python, scikit-learn, and pandas on MNIST dataset for classification and variance reduction.', link: 'https://github.com/joseph-heupler/ensemble-methods-svm' },
  { title: 'Neural Network Digit Classification', description: 'Developed neural networks for digit classification using Python and NumPy, implementing perceptron, backpropagation, and RNNs for tasks including regression and language identification.', link: 'https://github.com/joseph-heupler/nn-digit-classification' },
  { title: 'Neural Networks and Learning Theory Applications', description: 'Explored advanced techniques like FNNs, CNNs, Autoencoders, and GANs using Python, PyTorch, and scikit-learn. Analyzed datasets like CIFAR-10 and Fashion MNIST, implementing dropout and various optimizers for enhanced performance.', link: 'https://github.com/joseph-heupler/nn-learning-theory' }
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
              <a href={project.link} target="_blank" rel="noopener noreferrer">Code</a>
            </li>
          ))}
        </ul>
      </Fade>
    </section>
  );
}

export default Projects;
