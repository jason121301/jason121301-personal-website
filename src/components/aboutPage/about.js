import NavBar from '../Basics/navBar'
import Header from '../Basics/header';
import './about.css';
import { Container } from 'react-bootstrap';

function About() {
  
  return (

    <div className="App">
      <div className="front-page">
        <Container>
          <div>
          <Header />

          </div>
          <div>
          <NavBar />
          </div>
          <div className="center-text">
            <header className="App-header">
              <p style={{fontSize:"10px"}}>
                Welcome to Bikini Bottom Business Center
              </p>
              <p style={{fontSize:"25px"}}>
                Start Your Brand New Business in Bikini Bottom Right Now.
              </p>
              <p style ={{fontSize:"16px"}}>
                We provide many services to start up and grow your brand new underwater investment.
              </p>
              <button type="button" class="btn btn-primary btn-lg">
                Get Started
              </button>
            </header>
          </div>
        </Container>
      </div>
      <div className="frontPageInfo">
        <div class="container">
          <div class="row">
            
            <div class="col-sm border border-info rounded me-4" >
              
              <header className="tripleColumnHeader">Surf Yourself into Success</header>
              <div className="imageHolder">
              </div>
              <p className="tripleColumnText">Learn from the very best who has once surfed their way into their own succesful entrepeunership. From amazing owners such as Mr. Krabs 
              and even newcomers from the land such as Sandy, they will be right there to support you.
              </p>
            </div>
            <div class="col-sm border border-info rounded me-4" >
              
              <header className="tripleColumnHeader">Seek to See More</header>
              <div className="imageHolder">
              </div>
              <p className="tripleColumnText">In the sea, there are much more ventures to be taken. From the deep dark depth of the Marijuana Trench to the cheerful coves of the
              Great Barrier Reef. Join us in order to see much more opportunities that you can possible imagine.
              </p>
            </div>
            <div class="col-sm border border-info rounded" >

              <header className="tripleColumnHeader">Wave Goodbye to Failure</header>
              <div className="imageHolder">
              </div>
              <p className="tripleColumnText">Failure will be nothing but a stepbacks that you could say goodbye to. With out help, failure is nothing but rare and antique treasure chest
              that could be greatly benefitted from but still extremely rare nonetheless.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default About;