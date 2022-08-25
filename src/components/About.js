import React from 'react';
import { GrLinkedin } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr';

const About = () => {
  return(
    <section className="mt-5">
      <h2 className="about-header mb-5">This webapp created by</h2>
      <ul className="">
        <li className="li-links">
          Alex Friedman
          <a href="https://www.linkedin.com/in/alex-friedman-codes/" target="_blank" rel="noreferrer">
            <GrLinkedin className="li-icon ml-2" />
          </a>
          <a href="https://www.github.com/friedmanalexg" target="_blank" rel="noreferrer">
            <GrGithub className="gh-icon ml-2" />
          </a>
        </li>
        <li className="li-links">
          Alex Yang
          <a href="https://www.linkedin.com/in/xauvkub-yang/" target="_blank" rel="noreferrer">
            <GrLinkedin className="li-icon ml-2" />
          </a>
          <a href="https://www.github.com/xauvk" target="_blank" rel="noreferrer">
            <GrGithub className="gh-icon ml-2" />
          </a>
        </li>
        <li className="li-links">
          Lucas Duncan
          <a href="https://www.linkedin.com/in/lucaswdunc/" target="_blank" rel="noreferrer">
            <GrLinkedin className="li-icon ml-2" />
          </a>
          <a href="https://www.github.com/lucasdonuts" target="_blank" rel="noreferrer">
            <GrGithub className="gh-icon ml-2" />
          </a>
        </li>
      </ul>
      <img className="big-clippy mt-5" src="https://i.imgur.com/btQURSq.png" alt="big-clippy"></img>
    </section>
  )
}

export default About;