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
export default function Projects() {
  let project: Props = {
    projectId: 1,
    name: "Api tester",
    projectName: "LaunchPad-X",
    description:
      "is  lightweight tool for testing REST APIs with an intuitive interface.",
    demoLink: "https://launchpad-x-io.vercel.app/",
    stack: ["react", "typescript", "nodejs"],
  };
  return (
    <><h1>Projects</h1>
      <div id="projects">
        
        <Project
          projectId={project.projectId}
          name={project.name}
          projectName={project.projectName}
          description={project.description}
          demoLink={project.demoLink}
          stack={project.stack}
        />
        <Project
          projectId={2}
          name={project.name}
          projectName={project.projectName}
          description={project.description}
          demoLink={project.demoLink}
          stack={project.stack}
        />

        <Project
          projectId={project.projectId}
          name={project.name}
          projectName={project.projectName}
          description={project.description}
          demoLink={project.demoLink}
          stack={project.stack}
        />
        
      </div>
    </>
  );
}
