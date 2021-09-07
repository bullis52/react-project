import axios from "axios";


let config = {
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmZkOGM1ZTM5ZjFhNzY4ZmRhM2Y2Mjc4Nzk3ZjdlMiIsInN1YiI6IjYxMmY1YTQ0MzU3YzAwMDA0M2U2NzNmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QTLQkbhmTp8ZAwOsEg4vP7IjdlXfQmWmzKL51ZYBRJA'
    }
};

let axiosInstance = axios.create(config)
const getMovies = async (pages) => await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=bcb4edb29b0de1fbbb2ebc6d8cbeaee5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pages}`)

// const fetchMovies = async (page,genreforURL) => {
//     const { data } = await axios.get(
//     );
//     setContent(data.results);
//     setNumOfPages(data.total_pages);
// };
const getGenres = async () => await axiosInstance.get(`/genre/movie/list`)
export {getMovies,getGenres}
// `https://api.themoviedb.org/3/discover/movie?api_key=bcb4edb29b0de1fbbb2ebc6d8cbeaee5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`