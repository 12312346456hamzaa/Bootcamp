import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  return (
    <div className="App">
      <Carousel showThumbs={true} infiniteLoop autoPlay>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Hong_Kong_Skyline_Red_Junk_Boat.jpg" alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/MacauRuinsOfStPaul.jpg" alt="Macao" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Himeji_Castle_in_May_2015.jpg" alt="Japan" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Las_Vegas_Strip_-_View_from_the_Eiffel_Tower_02.jpg" alt="Las Vegas" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
