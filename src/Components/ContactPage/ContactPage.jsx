import "./ContactPage.css";
import emailjs from "@emailjs/browser";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

class ContactPage extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  };  

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    let templateParams = {
      from_email: email,
      from_name: name,
      message: message,
    };
    emailjs.send(
      "service_e99wro5",
      "template_302ruio",
      templateParams,
      "9WX-1IzJ-8yQIOf6m"
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <>
        <div className="contactContainer" id="ContactPage">
          <div className="contactHeading">
            <h1 id="aboutText">CONTACT</h1>
          </div>
          <div className="contactUs">
            <div className="contactLeft">
              <div className="contactDesc">
                <h1>Contact Me</h1>
                <p>
                  Got an exciting project in mind? Let's bring your digital
                  dreams to life! Reach out to me today and together we'll build
                  an exceptional web presence that stands out from the crowd.
                </p>
              </div>
              <div className="contactSocial">
                <div className="socialCard">
                  <a href="mailto:rajsrivastav0603@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <h3>Email</h3>
                  <span id="cmail">rajsrivastav0603@gmail.com</span>
                  </a>
                </div>
                <div className="socialCard">
                  <a href="tel:+918421843544">
                  <FontAwesomeIcon icon={faPhone} />
                  <h3>Phone</h3>
                  <span>8421843544</span>
                  </a>
                </div>
                <div className="socialCard">
                  <a href="https://www.github.com/Raj0603" target="_blank">


                  <FontAwesomeIcon icon={faEnvelope} />
                  <h3>Github</h3>
                  <span>Raj0603</span>
                  </a>
                </div>
                <div className="socialCard">
                  <a href="https://www.linkedin.com/in/rajsrivastavb4a8221b1" target="_blank">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <h3>LinkedIn</h3>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="contactRight">
              

              <form id="contactform" onSubmit={this.handleSubmit.bind(this)}>
                <input
                  className="inp"
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  value={this.state.name}
                  onChange={this.handleChange.bind(this, "name")}
                />
                <input
                  className="inp"
                  type="text"
                  placeholder="Email"
                  name="user_email"
                  value={this.state.email}
                  onChange={this.handleChange.bind(this, "email")}
                />
                <textarea
                  className="inp"
                  placeholder="Message"
                  value={this.state.message}
                  onChange={this.handleChange.bind(this, "message")}
                />

                <button
                  id="submit"
                  type="submit"
                >
                Send
                </button>
              </form>
              
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactPage;
