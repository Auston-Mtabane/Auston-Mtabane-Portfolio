import "../styles/Hero.css";
import Profile from "./Profile";

export default function Hero() {
  return (
    <div className="container-hero">
        <Profile />
        <div id="hero-text">
            <h1 id="heading">A <span id="dev">&lt;Developer/&gt;</span> & <span id="design">Designer</span></h1>
            <p className="text"><span id="bold">D</span>etermined to turn ideas into interactive, meaningful software.<br/><span id="bold">E</span>mpowered by curiosity and a love for technology.<br /><span id="bold">V</span>ision-driven, value-focused, future-ready.</p>
        </div>
      
    </div>
  );
}
