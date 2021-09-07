import {LOAD_FILMS, LOAD_GENRES} from "./actions";

const loadFilms = (payload) => {
    return{type:LOAD_FILMS,payload}
}
const loadGenres = (payload) => {
    return{type:LOAD_GENRES,payload}
}
const newPage = (payload)=>{
    return{type:"NEW_PAGE",payload}
}
const Page = (payload)=>{
    return{type:"PAGE",payload}
}
// const addUser = (payload) => {
//     return{type:ADD_USER, payload}
// }
export {loadFilms,loadGenres,newPage,Page}