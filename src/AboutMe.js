// src/AboutMe.js
import React, { useState } from 'react';

function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <section className="about-me" id="about-me">
      <h2>About Me</h2>
      <p>
        Hey! My name is Santiago, and I'm passionate about building things and solving problems, which is what ultimately drove me to pursue a career in software engineering.
      </p>
      <button type="button" className="collapsible" onClick={toggleContent}>
        {isExpanded ? '[Read Less]' : '[Read More]'}
      </button>
      <div
        className={`collapsible-content ${isExpanded ? 'expanded' : ''}`}
      >
        {isExpanded && (
          <>
            <p>
              My journey with technology started early—back when I was a kid, I was always tinkering with gadgets at home, taking apart computers, and building my own systems from scratch. I loved the challenge of understanding how different components worked together and the satisfaction that came when everything clicked into place.
            </p>
            <p>
              Over the years, my curiosity led me deeper into more ambitious projects. I became heavily involved in the open-source Windows operating system community, creating custom versions optimized for gaming and pushing various findings and improvements. This experience allowed me to contribute significantly to the competitive gaming world, where I've been able to enhance performance and streamline user experiences.
            </p>
            <p>
              One of the most challenging yet rewarding projects I worked on was with the new Z790 Asus motherboards. When they came out, there were a lot of hidden BIOS variables that people struggled to edit due to safeguards set in place for the general public to not mess with these settings and configurations. I found ways to navigate those challenges and figured out how to make these adjustments using tools like Grub or SCEWIN—something many people thought impossible at the time.
            </p>
            <p>
              My drive to solve problems isn't limited to tech alone. In college, I also led my rugby team, which taught me invaluable lessons about teamwork, leadership, and resilience. These qualities have shaped my approach as an engineer—I'm not just about solving technical problems, but also about collaborating effectively, supporting my team, and leading initiatives to tackle complex challenges.
            </p>
            <p>
              For me, software engineering is the perfect blend of my passions—whether it's pushing the boundaries of what's possible, finding creative solutions to complex issues, or making an impact on the gaming and tech world. I'm always looking for the next challenge, and I thrive in environments that allow me to build, innovate, and grow.
            </p>
          </>
        )}
      </div>
    </section>
  );
}

export default AboutMe;
