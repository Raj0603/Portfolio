import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBriefcase,
  faPaperPlane,
  faGears,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isActive, setIsActive] = useState("home");

  return (
    <>
      <div className="sidebarContainer">
        <Link to="/" className="sideIcon">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <a className="sideIcon" onClick={() => setIsActive("about")} style={(isActive === "about") ? { color: 'white' } : {}} aria-current="page" href="#" >
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a className="sideIcon" onClick={() => setIsActive("skills")} style={(isActive === "skills") ? { color: 'white' } : {}} aria-current="page" href="#Skills">
          <FontAwesomeIcon icon={faGears} />
        </a>
        <a className="sideIcon" onClick={() => setIsActive("project")} style={(isActive === "project") ? { color: 'white' } : {}} aria-current="page" href="#Projects">
          <FontAwesomeIcon icon={faBriefcase} />
        </a>
        <a className="sideIcon" onClick={() => setIsActive("contact")} style={(isActive === "contact") ? { color: 'white' } : {}} aria-current="page" href="#ContactPage">
          <FontAwesomeIcon icon={faPaperPlane} />
        </a>
      </div>
      
    </>
  );
};
export default Sidebar;
