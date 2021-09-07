import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import './MoveList.css'
export function MoveList(){
    return(
        <div className={`movieslistcard`}>
            <div className="container">
                <MoviesListCard/>
            </div>
        </div>
    )
}