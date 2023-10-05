import './home.css';
import NavBar from '../Basics/navBar';
import Header from '../Basics/header';
import { Container } from 'react-bootstrap';
import sea from '../Basics/images/sea.png'
import waves from '../Basics/images/wave.png'
import surf from '../Basics/images/surf.png'

function Home() {
  
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
              <p style={{fontSize:"10px", color:"rgba(0,179,150,255)"}}>
                Welcome to Winning Springs
              </p>
              <p style={{fontSize:"25px"}}>
                The Future of Your Business is in Singapore
              </p>
              <p style ={{fontSize:"16px"}}>
                We provide many services to start up and acclimate your business in Singapore.
              </p>
              <button type="button" class="btn btn-primary btn-lg" style={{backgroundColor: "rgba(0,179,150,255)", borderColor: "grey"}}>
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
                <img className="tripleColumnImage" src={surf} alt=""></img>
              </div>
              <p className="tripleColumnText">Learn from the very best who has once surfed their way into their own succesful entrepeunership. From amazing owners such as Mr. Krabs 
              and even newcomers from the land such as Sandy, they will be right there to support you.
              </p>
            </div>
            <div class="col-sm border border-info rounded me-4" >
              
              <header className="tripleColumnHeader">Seek to See More</header>
              <div className="imageHolder">
                <img className="tripleColumnImage" src={sea} alt=""></img>
              </div>
              <p className="tripleColumnText">In the sea, there are much more ventures to be taken. From the deep dark depth of the Marijuana Trench to the cheerful coves of the
              Great Barrier Reef. Join us in order to see much more opportunities that you can possible imagine.
              </p>
            </div>
            <div class="col-sm border border-info rounded" >

              <header className="tripleColumnHeader">Wave Goodbye to Failure</header>
              <div className="imageHolder">
                <img className="tripleColumnImage" src={waves} alt=""></img>
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

export default Home;
