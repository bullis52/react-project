import {useSelector} from "react-redux";
import './MovieInfo.css'
import {GenreBadge} from "../GenreBadge/GenreBadge";
export function MoviesInfo(props){
    let {match: {params: {id}}} = props;
    console.log(props)
    let movie = useSelector(({movie}) => movie)
    const movieName = movie.filter(value => id.indexOf(value.id) !== -1)
    return(
        <div>
            {
                movieName.map(value =>
                    <div key={value.id} className={'movies_info__wrap'}>
                        <div className={'movies_info__content container'}>
                             <h1 className="movies_info__title">
                                 {value.original_title}
                             </h1>
                            <div className={'card_movie'}>
                                <div className="card_movie__img">
                                    <img  src={`https://image.tmdb.org/t/p/w500${value.backdrop_path}`} alt=""/>
                                </div>
                                <div className="card_movie__content">
                                    <h2 className="card_movie_title">
                                        {value.title} - ({value.release_date})
                                    </h2>
                                    <div className="card_movie_genres">
                                      Genre -<GenreBadge genre_ids={value.genre_ids}/>
                                    </div>
                                    <div className="card_movie_rating">
                                       Rating - {value.vote_average}
                                    </div>
                                </div>
                            </div>
                            <div className="movies_info__overview">
                                {value.overview}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}