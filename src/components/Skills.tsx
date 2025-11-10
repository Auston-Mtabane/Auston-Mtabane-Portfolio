import '../styles/Skills.css'
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

export default function (){
    return(
        <div id="skills-outer-div">
          <div className="skills-row">
            {skills.map((skill, index) => (
              <span key={index} className={`badge ${colors[index % colors.length]}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
    );
}