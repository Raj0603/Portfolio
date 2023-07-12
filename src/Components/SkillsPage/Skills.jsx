import "./Skills.css";
import mdb from "../../assets/mdb.png";
import js from "../../assets/js.png";
import py from "../../assets/py.png";
import node from "../../assets/node.png";
import tf from "../../assets/tf.png";
import react from "../../assets/react.png";
import git from "../../assets/git.png";
import tw from "../../assets/tw.png";
import css from "../../assets/css.png";
import flutter from "../../assets/flutter.png";

const TagCloud = () => {

  return (
    <div className="skillContainer" id="Skills">
      <div className="skillHeading">
        <h1 id="skillText">SKILLS</h1>
      </div>

      <div className="skillBox">
        <div class="wrapper">
          <div class="tiles-card root">
            <div class="tiles-overlay"></div>
            <div class="tiles-circle">
              <img
                src={css}
                data-v-5e99277a=""
              />
              <p>Css</p>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="tiles-card root">
            <div class="tiles-overlay"></div>
            <div class="tiles-circle">
              <img
                src={js}
                data-v-5e99277a=""
              />
              <p>JS</p>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="tiles-card root">
            <div class="tiles-overlay"></div>
            <div class="tiles-circle">
              <img
                src={mdb}
                data-v-5e99277a=""
              />
              <p>MongoDB</p>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="tiles-card root">
            <div class="tiles-overlay"></div>
            <div class="tiles-circle">
              <img
                src={react}
                data-v-5e99277a=""
              />
              <p>React</p>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="tiles-card root">
            <div class="tiles-overlay"></div>
            <div class="tiles-circle">
              <img
                src={node}
                data-v-5e99277a=""
              />
              <p>Node JS</p>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="tiles-card root">
            <div class="tiles-overlay"></div>
            <div class="tiles-circle">
              <img
                src={git}
                data-v-5e99277a=""
              />
              <p>Git</p>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="tiles-card root">
            <div class="tiles-overlay"></div>
            <div class="tiles-circle">
              <img
                src={py}
                data-v-5e99277a=""
              />
              <p>Python</p>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="tiles-card root">
            <div class="tiles-overlay"></div>
            <div class="tiles-circle">
              <img
                src={tf}
                data-v-5e99277a=""
              />
              <p>TensorFlow</p>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="tiles-card root">
            <div class="tiles-overlay"></div>
            <div class="tiles-circle">
              <img
                src={flutter}
                data-v-5e99277a=""
              />
              <p>Flutter</p>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="tiles-card root">
            <div class="tiles-overlay"></div>
            <div class="tiles-circle">
              <img
                src={tw}
                data-v-5e99277a=""
              />
              <p>Tailwind</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TagCloud;
