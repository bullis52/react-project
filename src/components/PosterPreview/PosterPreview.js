export function PosterPreview({item}){

    return(<img className={'img_card'} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt=""/>)

}