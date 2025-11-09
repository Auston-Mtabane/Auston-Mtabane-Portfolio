import "../styles/AboutMe.css";
const skills = [
  "Java",
  "Python",
  "C++",
  "Embedded Systems",
  "APIs",
  "OOP",
  "Full-Stack Development",
  "GitLab",
  "Agile Methodology",
  "Test Driven Development (TDD)",
  "Systems Design",
  "Software Engineering Principles",
  "Figma",
  "UI/UX Design",
  "Inkscape",
  "Graphic Design",
  "3D Modeling",
];

const colors = ["gray", "indigo", "red", "amber", "emerald"];

export default function AboutMe() {
  return (
    <div >
      <h1 id="heading">About Me</h1>

      <div className="container-about-me">
        <div id="about-me">
          <p>
            I’m a Software Engineering student at WeThinkCode_ with a background in Electrical Engineering.
            I’m passionate about building at the intersection of hardware, software, and design, creating thoughtful, efficient, and user-focused solutions.
            Skilled in embedded systems and full-stack development, I bring a strong foundation in problem-solving, agile practices, and creative communication.
            I’m always exploring how design and technology can come together to make meaningful digital experiences.
          </p>

        </div>
        <div id="skills-outer-div">
          <h4>
            skills
          </h4>
          <div className="skills-row">
            {skills.map((skill, index) => (
              <span key={index} className={`badge ${colors[index % colors.length]}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}
