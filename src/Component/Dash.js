import React from "react";
import "../../src/style.css";
import img from "../../src/img/img.jpg";

const Dash = () => {
  return (
    <div className="card-box">
      <div class="card">
        <div class="img-bx">
          <img src={img} alt="img" />
        </div>
        <div class="content">
          <div class="detail">
            <h2>
              Sakthivel Pandian
              <br />
              <span>MERN stack Developer</span>
            </h2>
            <ul class="sci">
              <li>
                <a href="https://www.facebook.com/sakthivel.vel.94801" target="_blank">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Sakthiiii" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sakthi-vel-797277188/"   target="_blank">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
