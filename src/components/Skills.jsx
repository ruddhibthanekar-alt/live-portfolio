function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "OpenAI API",
    "Git & GitHub",
    "Responsive Web Design"
  ];

  return (
    <section id="skills">
      <h2 className="title">Skills</h2>

      <div className="skills">
        {skills.map((skill, index) => (
          <div className="card" key={index}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;