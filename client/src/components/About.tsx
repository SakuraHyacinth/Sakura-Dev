import Fine from '../assets/fine.gif'

const About = () => (
  <section id="about" className="about">
    <h2>About Me (AKA the backstory...)</h2>
    <p>
      I am a computer science graduate at California State University, San Marcos, who also is struggling with the dying job market.
      Why computer science? Well ever since I was little, I was obsessed with the art of creation whether it be through drawing, or building.
      Originally I wanted to be an architect, then a mechanical engineer, then a robotics engineer, and now computer scientist.
      I just really loved the idea of being able to make digital (and sometimes embedded) creations come to life.
      This can be through web development, app development, or even robotics. I really liked where computer science could take you in the field of engineering.
      I always aspired to be able to create something myself that could have some sort of impact on people.
      <br />
      <br />
      But alas, I am broke (because I DO NOT HAVE A JOB HAHAHAHA).
      <br />
      <br />
      Everything is fine...
    </p>
    <img src={Fine} />
  </section>
);

export default About;