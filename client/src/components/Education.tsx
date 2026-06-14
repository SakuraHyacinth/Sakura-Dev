import GitHub from "../assets/github.png"
import LinkedIn from "../assets/linkedin.png"

const Education = () => (
  <section id="education" className="education">
    <h2>Education</h2>
    <h3>California State University, San Marcos (CSUSM)</h3>
    <p>Bachelors of Science (BS) - Computer Science</p>
    <p>Magna Cum Laude</p>
    <p>GPA: 3.8</p>
    <p>Deans list: Fall 2022 - Spring 2026</p>
    <h2>Skills</h2>
    <div id="icon-div">
      <img src={GitHub} className="icon-img" />
      <img src={LinkedIn} className="icon-img" />
    </div>
  </section>
);

export default Education;