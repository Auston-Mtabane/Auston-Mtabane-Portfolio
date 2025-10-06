import "../styles/Profile.css";

export default function Profile() {
  return (
    <div id="profile">
      
      <main>
        <img src="profile-1.png" alt="person" id="profile-pic" />

        <div className="bio">
          <div className="info">
            <div id="name">
              <p id="name">Auston Mtabane</p>
              <img src="verified.svg" alt="" width={24} id="veridied" />
            </div>
            <p id="bio-text">Software Engineering Stu. and Graphic Designer</p>
          </div>
          <div className="status">
            
          </div>
        </div>
        <button className="connect" >
              connect +
          </button>
      </main>
    </div>
  );
}
