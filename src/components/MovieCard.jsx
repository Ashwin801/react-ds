import chainsaw from "../assets/chain.webp"
import ju from "../assets/juju.webp"
import on1 from "../assets/one1.webp"
import './moviecard.css';

function MovieCard({Mtitle}) {
  return (
    <>
        <div className="trending">
             <h1 className="new">{Mtitle}</h1>
          <div className="img2">
               <img src={on1}  />
               <img src={ju}  />
               <img src={chainsaw} />
               <img src={on1}  />
               <img src={ju}  />
               <img src={chainsaw} />
               <img src={on1}  />
               <img src={ju}  />
               <img src={chainsaw} />
               <img src={on1}  />
               <img src={ju}  />
               <img src={chainsaw} />
          </div>
       </div>
    </>
  )
}

export default MovieCard