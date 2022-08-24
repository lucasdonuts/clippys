import React from 'react';
import { GrLinkedin } from 'react-icons/gr';

const About = () => {
  return(
    <section className="mt-5">
      <h2 className="about-header mb-5">This webapp created by</h2>
      <ul className="">
        <li className="li-links">
          Alex Friedman <a href="https://www.linkedin.com/in/alex-friedman-codes/"><GrLinkedin className="li-icon" /></a>
        </li>
        <li className="li-links">
          Alex Yang <a href="https://www.linkedin.com/in/xauvkub-yang/"><GrLinkedin className="li-icon" /></a>
        </li>
        <li className="li-links">
          Lucas Duncan <a href="https://www.linkedin.com/in/lucaswdunc/"><GrLinkedin className="li-icon" /></a>
        </li>
      </ul>
      <img className="big-clippy mt-5" src="https://i.imgur.com/btQURSq.png" alt="big-clippy"></img>
    </section>
  )
}

export default About;