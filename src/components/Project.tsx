import { useState } from "react";
import "../styles/Project.css";
import Dialog from "./Dialog";

type Props = {
    projectId : number
    name: string;
    projectName: string;
    description: string;
    demoLink: string;
    stack: string[];
};
export default function Project({ projectId ,name, projectName, description, demoLink, stack }: Props) {
  const [size_,setSize] = useState("");
  const handleClick1 = ()=>{
      setSize(size_ == ""? "-expand":"-expand");
      console.log(size_);
  }
  return (
    <>
      <div id={`project`} onClick={handleClick1}>
        <div className="project-container" >
            
            <img src={`project-${projectId}.svg`} alt="" id="file" />
            <h1 id="project-title">
                {name}
            </h1>
            <p id="project-description"><span id="blue">{projectName}</span> {description}</p>
            <p id="demo"><a href={demoLink} target="_blank">Demo Link</a></p>
            <div id="stack">
               
              {stack.map((src,index) =>(<img key={index} src={`${src}.svg`} width={24}/>))}
            </div>
        </div>
        <Dialog size_={size_} setSize={setSize} />
      </div>
      

      
    </>
  );
}
