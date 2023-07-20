import React from "react";
import "./Portfolio.css";
import "animate.css";
import ecom from "../../assets/f4.jpg";
import rb from "../../assets/f9.jpg";
import hack from "../../assets/f6.jpg";
import ocr from "../../assets/f10.jpg";
import ttt from "../../assets/f13.jpg";
import tm from "../../assets/f14.jpg";

import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="portfolio-container" id="Projects">
      <div className="portfolio-header">
        <h1 id="portfolioText">PROJECTS</h1>
      </div>
      <div className="project-container">
        <a href="https://github.com/Raj0603/Ecommerce" target="_blank">
          <div className="project-card animate__animated animate__zoomIn">
            <img src={ecom} alt="Project 1" />
            <h2>Ecommerce</h2>
            <p>
              An ecommerce website built using the MERN stack is a full-stack
              web application that allows businesses to sell products online.
            </p>
            <p className="vc animate__animated animate__zoomIn">
              <span className="vc_span">

              View Code
              </span>
            </p>
          </div>
        </a>
        <a href="https://github.com/Raj0603/AI_CVMAKER" target="_blank">
          <div className="project-card animate__animated animate__zoomIn">
            <img src={rb} alt="Project 2" />
            <h2>Resumake</h2>
            <p>
              A career guidance website that uses AI/ML helps individuals make
              informed career decisions by providing personalized
              recommendations based on data analysis.
            </p>
            <p className="vc animate__animated animate__zoomIn">
              <span className="vc_span">

              View Code
              </span>
            </p>
          </div>
        </a>
        <a href="https://vcet-hackathon.web.app/" target="_blank">
          <div className="project-card animate__animated animate__zoomIn">
            <img src={hack} alt="Project 3" />
            <h2>Hackathon</h2>
            <p>
              A hackathon website built using the MERN stack is a platform that
              facilitates collaboration and innovation for developers to build
              software projects.
            </p>
            <p className="vc animate__animated animate__zoomIn">
              <span className="vc_span">

              Visit Site
              </span>
            </p>
          </div>
        </a>
        <a href="https://github.com/Raj0603/ocr" target="_blank">
          <div className="project-card animate__animated animate__zoomIn">
            <img src={ocr} alt="Project 1" />
            <h2>DOCVERSE</h2>
            <p>
            OCR application built with Flutter and powered by ML model.  Effortlessly capture, translate, and convert text into spoken words, providing a truly immersive and accessible reading experience.
            </p>
            <p className="vc animate__animated animate__zoomIn">
              <span className="vc_span">

              View Code
              </span>
            </p>
          </div>
        </a>
        <a href="https://github.com/Raj0603/tic-tac-toe" target="_blank">
          <div className="project-card animate__animated animate__zoomIn">
            <img src={ttt} alt="Project 1" />
            <h2>TIC TAC TOE</h2>
            <p>
              A Tic Tac Toe game build using flutter. Challenge your friends and relish in the classic strategic gameplay brought to life with stunning visuals and intuitive controls.
            </p>
            <p className="vc animate__animated animate__zoomIn">
              <span className="vc_span">

              View Code
              </span>
            </p>
          </div>
        </a>
        <a href="https://github.com/Raj0603/Time_Management" target="_blank">
          <div className="project-card animate__animated animate__zoomIn">
            <img src={tm} alt="Project 1" />
            <h2>Time Management</h2>
            <p>
              An Time Management webapp built using DJANGO framework. This powerful tool empowers you to effortlessly organize tasks, set priorities, and achieve your goals efficiently, all within an elegant and intuitive interface.
            </p>
            <p className="vc animate__animated animate__zoomIn">
              <span className="vc_span">

              View Code
              </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
