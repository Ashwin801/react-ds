import MainTitle from "../assets/onepiece-title.png";
import Plus from "../assets/add-circle-line.svg";
import Like from "../assets/thumb-up-line.svg";
import './movies.css'
import MovieCard from "../components/MovieCard"

function Movies() {
  return (
    <div className="m-section">
        <div className="m-hero">
          <img src={MainTitle} alt="" />
          <div className="m-hero-button">
            <button className="ply">Play</button>
            <div className="special">
              <button><img src={Plus} alt="" /></button>
              <button><img src={Like} alt="" /></button>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="side1">
            <p>THis is a movie that made saiabhayankar to the best of the worl of the india of the country of the world in such a way that I was very much astonished that how a 22 year old boy can do something fantaboulous and absolute liek this !!!!!</p>

          </div>
          <div className="side2">
            <div className="cast">
              <h1>Cast : </h1><p>Vijay Sethupathy , Lijomol , Alan Jose Santo and more</p>
            </div>
            <div className="genre">
              <h1>Genre</h1><p>Drama Movie,Comedy , Tamil thriller</p>
            </div>
          </div>
        </div>
        <MovieCard/>
    </div>
  )
}

export default Movies