import homeIcon from "../assets/house-simple.svg"
import searchIcon from "../assets/magnifying-glass.svg"
import filmIcon from "../assets/film-slate.svg"
import tv from "../assets/monitor.svg"
import trend from "../assets/trend-up.svg"
import plus from "../assets/plus.svg"
import titlecard from "../assets/onepiece-title.png"
import MovieCard from "../components/MovieCard"
import './home.css';


function Home() {
  return (
    <div className="netflix">
      <div className="sidebar">
        <img src={searchIcon} alt="search" />
        <img src={homeIcon} alt="home" />
        <img src={filmIcon} alt="films" />
        <img src={tv} alt="Tv shows" />
        <img src={trend} alt="trending" />
        <img src={plus} alt="add" />
      </div>
        <div className="main">
        <div className="hero">
          <img  src={titlecard} />
          <p>Rating :10/10</p>
          <p>100M Streams</p>
          <div className="hero-button">
            <button className="b1">Play</button>
            <button className="b2">Watch Trailer</button>
          </div>
        </div>
        <MovieCard/>
        <MovieCard/>
        </div>
    </div>
  )
}

export default Home