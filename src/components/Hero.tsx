import "../styles/Hero.css";
import Profile from "./Profile";

export default function Hero() {
  return (
    <div className="container-hero">
        <Profile />
        <div id="hero-text">
            <h1 id="heading">A <span id="dev">&lt;Developer/&gt;</span> & <span id="design">Designer</span></h1>
            <p className="text">Determined to turn ideas into interactive, meaningful software.<br/>Empowered by curiosity and a love for technology.<br />Vision-driven, value-focused, future-ready.</p>
        </div>
      
    </div>
  );
}
