import { useState } from "react";
import "../styles/Project.css";

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
  const handleClick = ()=>{
      setSize(size_ == "" ? "-expand": "")
  }
  return (
    <>
      <div id={`project`} onClick={handleClick}>
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
      </div>
      <dialog open={size_ !== ""}>
        <div>

        </div>
        <h1>What is Lorem Ipsum?</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ci0H1thFP4s?si=OyRrpzbHyppNoFgM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      </dialog>
    </>
  );
}
