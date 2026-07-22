function Projects() {

  const projects = [
    {
      title: "AI Resume Builder",
      description:
        "An AI-powered resume builder that helps users create professional resumes with modern templates.",
      tech:
        "React | Node.js | MongoDB",
      github:
        "https://github.com/ruddhibthanekar-alt/AI-resume-builder"
    },

    {
      title: "Dental Clinic Website",
      description:
        "A responsive dental clinic website with modern UI and appointment-focused features.",
      tech:
        "React | JavaScript | CSS",
      github:
        "https://github.com/ruddhibthanekar-alt/dental-clinic"
    }
  ];


  return (
    <section id="projects">

      <h2 className="title">
        Projects
      </h2>


      <div className="projects">

        {
          projects.map((project,index)=>(

            <div className="project-card" key={index}>

              <h3>
                {project.title}
              </h3>


              <p>
                {project.description}
              </p>


              <span>
                {project.tech}
              </span>


              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub
                </a>

              </div>


            </div>

          ))
        }

      </div>


    </section>
  );
}


export default Projects;