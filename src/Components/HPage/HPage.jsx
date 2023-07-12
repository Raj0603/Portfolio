import "./HPage.css";
import { Link } from "react-router-dom";
import profilepic from "../../assets/me6.jpg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const HPage = () => {
  return (
    <>
      <div className="home-container">
        <h1 style={{ fontSize: "xxx-large" }}>PORTFOLIO</h1>
        <div className="name-container">
          <div className="left-h-container">
            <span>WEB DEVELOPER</span>
            <h2 className="home-name">
              RAJ <br /> SRIVASTAV
            </h2>
          </div>

          <div className="image-container">
            <img src={profilepic} alt="" className="home-pp" />
          </div>

          <div className="right-h-container">
            <div className="rd-container">
              <span className="rd-span"></span>
              <p className="rd-p">
                With a passion for building robust and scalable web
                applications, I specialize in crafting modern and intuitive user
                interfaces.
                <br />
                <br />
                <a
                  href="https://www.instagram.com/_raj.xd/"
                  target="_blank"
                >
                  <FaInstagram style={{ color: "#000", margin: "10px" }} />
                </a>
                
                <a href="https://github.com/Raj0603" target="_blank">
                <FaGithub style={{ color: "#000", margin: "10px" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rajsrivastavb4a8221b1"
                  target="_blank"
                >
                  <FaLinkedin style={{ color: "#000", margin: "10px" }} />
                </a>
                <br />
                <Link to="/AllPage">
                  <button className="home-more">More About Me</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HPage;
