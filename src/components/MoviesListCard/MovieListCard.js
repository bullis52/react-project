import StarsRating from "../StarsRating/StarsRating";

import {GenreBadge} from "../GenreBadge/GenreBadge";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // withRouter
} from "react-router-dom";

export function MovieListCard({item}){
    return(
            <div>
                <div key={item.id} className={`card_movies`}>
                    <Link to={`/movie/${item.id}`}>
                        <div className="card_movies__img">
                            <PosterPreview item = {item}/>
                        </div>
                    </Link>
                        <div className={'card_movies__content'}>
                            <Link to={`/movie/${item.id}`}>
                            <div className="card_movies__title">
                                {item.title}
                            </div>
                            <div className="card_movies__categoris">
                                <img src="" alt=""/>
                                <GenreBadge genre_ids={item.genre_ids}/>
                            </div>
                            <div className="card_movies__quotes">
                                {item.overview}
                            </div>
                            </Link>
                    <div className="card_movies__rating">
                        <StarsRating/>{item.vote_average}
                    </div>
                </div>
            </div>
            </div>
    )
}