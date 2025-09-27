import "../styles/Projects.css";
import Project from "./Project";
type Props = {
  projectId : number
  name: string;
  projectName: string;
  description: string;
  demoLink: string;
  stack: string[];
};
let projects: Props[] = [{
    projectId: 1,
    name: "API tester",
    projectName: "LaunchPad-X",
    description:
      "is  lightweight tool for testing REST APIs with an intuitive interface.",
    demoLink: "https://launchpad-x-io.vercel.app/",
    stack: ["react", "typescript", "nodejs"],
  },
  {
    projectId: 2,
    name: "Invoice App",
    projectName: "CPrime Invoice Creater",
    description:
      "A simple app for generating, managing, and exporting invoices.",
    demoLink: "https://github.com/Auston-Mtabane/CPrime-Invoice-Creater",
    stack: ["react", "superbase", "nodejs"],
  },
  {
    projectId: 3,
    name: "Travel App",
    projectName: "Travel Mate",
    description:
      "is a Travel Risk Management app that helps users find safe trips.",
    demoLink: "https://github.com/Auston-Mtabane/CPrime-Invoice-Creater",
    stack: ["react", "superbase", "nodejs"],
  }
];
export default function Projects() {
  
  return (
    <><h1 id="Projects">Projects</h1>
      <div id="projects">
        {projects.map((project) => (
          <Project
            key={project.projectId }
            projectId={project.projectId}
            name={project.name}
            projectName={project.projectName}
            description={project.description}
            demoLink={project.demoLink}
            stack={project.stack}
          />
        ))}
        
      </div>
    </>
  );
}
