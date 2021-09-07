
import './MoviesListCard.css'
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getGenres, getMovies} from "../../services/axios";
import {loadFilms, loadGenres, newPage, Page} from "../redux/actions-creators";
import {MovieListCard} from "./MovieListCard";
import {Pagination} from "@material-ui/lab";


export function MoviesListCard() {
    let state = useSelector(state => state)
    let total_pages = useSelector(({totalPages})=> totalPages)
    let page = useSelector(({page})=> page)
    let dispatch = useDispatch()
    let movies = state.movie
    useEffect(() => {
        getMovies(page).then(value => {
            dispatch(loadFilms(value.data))
            dispatch(newPage(value.data.total_pages))
        }
    )
            getGenres().then(value => dispatch(loadGenres(value.data.genres)))
}, [page]
)
    const handleChange = (event, value) => {
        dispatch(Page(value))
    };



    return (
    <div className={'wrap_card'}>
        <div className={'card_movies__wrapper'}>
        {
            movies && movies.map(value =>  <MovieListCard item={value} key={value.id} />)
        }
        </div>
        <Pagination
            className={'pagination'}
            onChange={handleChange}
            count={total_pages}
            color="primary"
            // hideNextButton
            // hidePrevButton
        />
    </div>
)
}