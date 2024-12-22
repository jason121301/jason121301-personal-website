import './home.css';
import selfPhoto from '../Basics/images/ownPhoto.jpg'
import ministryLogo from '../Basics/images/Ontario Ministry of Education Logo.png'
import restifyIndex from '../Basics/images/restify-index.png'
import ContactMe from '../contactMe';
import ImageGallery  from './imageGallery';

function Home() {
  
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#header-container" className="nav-link">About Me</a></li>
            <li><a href="#job-title" className="nav-link">Work Experience</a></li>
            <li><a href="#project-title" className="nav-link">Projects</a></li>
            <li><a href="#contact-me" className="nav-link">Contact Me</a></li>
          </ul>
        </nav>
      </header>
      <div id="header-container" className="header-container">
        <div className="image-container">
          <img
            src={selfPhoto}
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="text-container">
          <h1 className="name">Jason Sastra</h1>
          <p className="roles">Programmer | Game Designer | Software Engineer</p>
        </div>
      </div>

    {/* Title Container */}
    <div id="job-title" className="job-title-container">
      <h1 className="job-title">Work Experience</h1>
    </div>
          {/* New Section */}
    <div className="content-container">
      <div className="content-inner">
        <div className="image-container-left">
          <img
            src={ministryLogo}
            alt="Ministry Logo"
            className="example-image"
          />
        </div>
        <div className="text-container-centralized">
          
          <h2 className="subheader">Ministry of Education</h2>
          
          <h5>IT QA Assistant</h5>
          <p>September 2023 - May 2024</p>
          <p className="description">
          I modernized Power BI reports for both internal and external stakeholders. 
          My responsibilities included extracting, querying, and analyzing data from internal databases to create insightful Power BI reports. 
          Additionally, I initialized an Azure DevOps repository to streamline the workspace and development pipeline.
          To enhance accessibility and ensure proper permissions, I set up an internal website for private and public Power BI report viewing.
          </p>
        </div>
      </div>
    </div>
    <div id="project-title" className="project-title-container">
      <h1 className="project-title">Projects</h1>
    </div>
    {/* Project 1 */}
    <div className="project-1-container">
      <div className="content-inner">
        <div className="text-container-centralized">
          <a href='https://pokemonball34.itch.io/into-the-dataswarm' className="subheader">Into the Dataswarm</a>
          <h5>CSC404 Game Development Course - Main Developer</h5>
          <p className="description">

          Created a tactical turn-based game featuring a customizable enemy AI system designed to adapt dynamically, 
          offering players engaging puzzle-solving challenges. 
          I developed a modular level generator and a versatile enemy patrol system, 
          allowing for easy customization and scalability across various stages. 
          The game included carefully crafted levels that balanced strategic complexity with enjoyable gameplay moments.
           Additionally, I designed an intuitive user interface, complete with tutorial screens, control instructions, and clear stage menus,
            ensuring a smooth and user-friendly experience for players.
          </p>
        </div>
        <div className="video-container-right">
          <video controls className="example-video-1">
          <source src="/dataswarm_trailer01.mp4" type="video/mp4"/>

            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>

    {/* Project 2 */}
    <div className="project-2-container">
      <div className="content-inner">

        <div className="text-container-centralized">
          <h2 className="subheader">Restify</h2>
          <h5>Front End Development</h5>
          <p className="description">

          Collaborated with a team of three to develop an Airbnb-style website for managing reservations, 
          bookings, property listings, and user-host interactions. I contributed to creating a responsive design that seamlessly adapts to various devices, 
          providing an optimized experience for both mobile and desktop users. 
          The website was built using a Django backend integrated with a React frontend, 
          ensuring a cohesive and interactive user experience.
          </p>
        </div>
        <div className="image-container-right">
          <ImageGallery />
        </div>
      </div>
    </div>

    {/* Project 3 */}
    <div className="project-3-container">
      <div className="content-inner">
        <div className="text-container-centralized">
          <a href="https://jason121301.itch.io/paper-plate-paranoia" className="subheader">Paper Plate Paranoia</a>
          <h5>Game Jam</h5>
          <p className="description">
          Developed a bullet hell game in Unity, incorporating diverse power-ups, 
          enemy types, collectibles, and dynamic objectives to enhance player engagement. I engineered complex power-up logic 
          and integrated robust enemy AI with adaptive spawn systems to create dynamic gameplay. Additionally, I designed and 
          implemented companion AI that dynamically follows players, contributing to a cohesive and interactive gameplay experience.
          </p>
        </div>
        <div className="video-container-right">
          <iframe
            className="example-video-2"
            src="https://www.youtube.com/embed/Ug7dqYTGL4o"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
      </div>
    </div>
    <section id="contact-me" className="contact-me">
          <ContactMe />
    </section>
    
    
    
    </div>
  );
}

export default Home;
