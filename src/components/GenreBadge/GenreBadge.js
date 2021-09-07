import {useSelector} from "react-redux";

export function GenreBadge ({genre_ids}){
    const genres = useSelector(({genres}) => genres)

    const genresIdsStr = genre_ids.join(',');
    //
    // const genresIdsStr  = '28,12,14,35'
    // console.log(genresIdsStr)
    const genresName = genres.filter(value => genresIdsStr.indexOf(value.id) !== -1)

    // console.log(genresName)

    return(
        <div>
            {
                genresName.map(value => <p  key={value.id}>{value.name}</p>)
            }
        </div>
    )
}