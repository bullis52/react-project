
import {MoviesInfo} from "./MoviesInfo";
import {Route} from "react-router-dom";

export function MovieInfo(props){
    let {match: {url}, history} = props;
    return(
        <div>
            {/*{*/}
            {/*    state.map(value=> <MoviesInfo ke={value.id} item={value} history={history}/>)*/}
            {/*}*/}
            <Route path={`${url}/:id`} render={(props) => {
                return <MoviesInfo {...props} />
            }}/>

        </div>
    )
}