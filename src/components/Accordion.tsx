import React, { useState,type JSX } from 'react';
import '../styles/Accordion.css';
import Skills from './Skills';


interface AccordionItem {
  id: string;
  question: string;
  element: JSX.Element;
}



const education = 
    <div className='textblock eduation'>
        <div>
            <h2 >Tshwane University of tech</h2>
            <p className='year' style={{color : "#5583c7ff"}}>2020 - 2023</p>
            <p>Electrical Engineering BEng</p>
        </div>

        <div>
            <h2>WeThinkcode</h2>
            <p className='year' style={{color : "#5583c7ff"}}>2024 - 2025</p>
            <p>Software Engineering NQF6 </p>
            <p>Occupational Diploma </p>
        </div>

    </div>
;

const experience = 
    <div className='textblock experience'>
        <div>
            <h2>Graphic Designer</h2>
            <p className='company'>WeThinkCode_</p>
            <p className='year' style={{color : "#5583c7ff"}}>2025 - present</p>
            <p>Social Media Graphics, Event Posters, Newsletters</p>
        </div>

        <div>
            <h2>Graphic Designer</h2>
            <p className='company'>Hike - Affordable & Safe Rides | South Africa</p>
            <p className='year' style={{color : "#5583c7ff"}}>2023 - 2024</p>
            <p>As a Graphic Designer at Hike, I was responsible for creating visually engaging graphics that aligned with the brand's
            identity and objectives. </p>
        </div>

        <div>
            <h2>Student Assistant (in programming c/c++)</h2>
            <p className='company'>Tshwane University of Technology | Witbank Mpumalanga</p>
            <p className='year' style={{color : "#5583c7ff"}}>2023</p>
            <p>As a student assistant, I supported learners in mastering engineering software design by simplifying complex concepts
            and providing personalized guidance.</p>
        </div>
    </div>
   
    ;

const skills = 
    <div className='textblock skills'>
        <Skills />
    </div>
    ;
const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const accordionData: AccordionItem[] = [
    {
      id: 'basic-heading-one-default',
      question: 'Skills',
      element: skills
    },
    {
      id: 'basic-heading-two-default',
      question: 'Experience',
      element: experience
    },
    {
      id: 'basic-heading-three-default',
      question: 'Education',
      element: education
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-group">
      {accordionData.map((item, index) => (
        <div  key={item.id} className={`accordion ${index === 0 ? 'first' : ''}`} id={item.id} >
          <button className={`accordion-toggle ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`collapse-${item.id}`}
          >
            <h5>{item.question}</h5>
            <svg className={`accordion-icon ${activeIndex === index ? 'rotated' : ''}`} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            id={`collapse-${item.id}`}
            className={`accordion-content ${activeIndex === index ? 'open' : ''}`}
            aria-labelledby={item.id}
          >
            <p>{item.element}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;