import "./App.css";

const profile = {
  name: "Sarvesh K",
  role: "B.Tech CSE Student",
  college: "SRM Institute of Science and Technology, Chennai",
  location: "Chennai, Tamil Nadu",
  email: "sarvesh.52837@gmail.com",
  github: "https://github.com/sarvesh2838",
  linkedin: "https://linkedin.com/in/sarvesh2838",
  portfolio: "https://sarvesh2838.github.io/My-Portfolio",
};

const skills = [
  "Python",
  "JavaScript",
  "React.js",
  "SQL",
  "PostgreSQL",
  "Git & GitHub",
  "Linux",
  "UI/UX Basics",
  "Cloud Computing",
  "DevOps Basics",
];

const projects = [
  {
    title: "Rug-Shield",
    desc: "A Solana blockchain risk-analysis project that checks token safety using scoring rules and backend logic.",
    tech: "Python, PostgreSQL, Blockchain, API",
  },
  {
    title: "AllCollegeEvent.com (In Progress)",
    desc: "A full-stack college event platform idea with student, faculty, and entrepreneur login portals.",
    tech: "React, UI/UX, Authentication, Web App",
  },
  {
    title: "Personal Portfolio",
    desc: "A responsive developer portfolio to showcase my skills, projects, certificates, and learning journey.",
    tech: "React, CSS, GitHub Pages",
  },
  {
    title: "3D Website",
    desc: "A creative 3D-style website built with smooth transitions, interactive layout, and modern visual effects.",
    tech: "HTML, CSS, JavaScript, 3D UI",
  },
];

const certificates = [
  {
    title: "Microsoft Python Development Professional Certificate",
    issuer: "Issued by Microsoft through Coursera",
  },
  {
    title: "Google AI Professional Certificate",
    issuer: "Issued by Google through Coursera",
  },
  {
    title: "Google IT Support Professional Certificate",
    issuer: "Issued by Google through Coursera",
  },
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Issued by Google through Coursera",
  },
];

const experience = [
  {
    title: "College Ambassador",
    org: "Techfest, IIT Bombay",
    desc: "Promoting technical events, handling outreach tasks, and improving communication and leadership skills.",
  },
];

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  return (
    <main>
      <nav className="navbar">
        <div className="logo">SK</div>

        <div className="navLinks">
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("certificates")}>
            Certificates
          </button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <p className="tag">Computer Science Student</p>
          <h1>
            Hi, I’m <span>{profile.name}</span>
          </h1>
          <p className="heroPara">
            I am a B.Tech CSE student interested in software development, cloud
            computing, DevOps, and building useful web projects. I like creating
            simple, clean, and reliable applications that solve real problems.
          </p>

          <div className="heroButtons">
            <button
              className="primaryBtn"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </button>

            <button
              className="secondaryBtn"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="heroCard">
          <div className="profileCircle">SK</div>
          <h2>{profile.name}</h2>
          <p>{profile.role}</p>
          <p>{profile.college}</p>
          <small>{profile.location}</small>
          <a
            href={`${import.meta.env.BASE_URL}Sarvesh_Resume.pdf`}
            className="resumeBtn"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>
      </section>

      <section id="about" className="section">
        <p className="sectionLabel">About Me</p>
        <h2>Building my skills step by step</h2>
        <p className="aboutText">
          I am focused on improving my programming, web development, cloud, and
          problem-solving skills. My current goal is to build strong projects,
          gain internship experience, and create a professional profile that
          shows my learning clearly.
        </p>
      </section>

      <section id="skills" className="section">
        <p className="sectionLabel">Skills</p>
        <h2>Technologies I’m learning and using</h2>

        <div className="skillsGrid">
          {skills.map((skill) => (
            <div className="skillCard" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <p className="sectionLabel">Projects</p>
        <h2>Selected Work</h2>

        <div className="projectsGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <span>{project.tech}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="certificates" className="section">
        <p className="sectionLabel">Certificates</p>
        <h2>Certifications</h2>

        <div className="certificateList">
          {certificates.map((cert) => (
            <div className="certificateItem" key={cert.title}>
              <span>✓</span>
              <div>
                <p>{cert.title}</p>
                <small>{cert.issuer}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section experienceSection">
        <p className="sectionLabel">Experience</p>
        <h2>Activities & Experience</h2>

        <div className="experienceGrid">
          {experience.map((item) => (
            <div className="experienceCard" key={item.title}>
              <h3>{item.title}</h3>
              <h4>{item.org}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contactSection">
        <h2>Let’s Connect</h2>
        <p>
          I am open to internships, project collaboration, learning
          opportunities, and tech communities.
        </p>

        <div className="contactLinks">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Sarvesh K. Built with React.</p>
      </footer>
    </main>
  );
}

export default App;
