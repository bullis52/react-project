import logo from '../header-img/Logo.png'
import './header.css';
import {Route, Switch,Link} from "react-router-dom";
import {MoveList} from "../../MoveList/MoveList";
import {MovieInfo} from "../../MovieInfo/MovieInfo";
export function Header(){
    return(
        <div className={'light'}>
        <div className={'header container'}>
            <div className={'header_logo'}>
                <Link to = {'/home'}>
                    <img src={logo}  alt=""/>
                </Link>
            </div>
            <div className="header_burger">
                <span></span>
            </div>
            <div className="header_form">
                <form action="">
                    <input type="text" className={'header_form__item'}/>
                </form>
            </div>
            <div className="header_user">
                <div className="header_user__img">
                </div>
                <div className="header_user__welcome">
                    <p>welcome Jonh</p>
                </div>
            </div>
        </div>
            <Switch>
                <Route path={'/home'} component={MoveList}/>
                <Route path={'/movie'} component={MovieInfo}/>
                }}/>
                <MoveList/>
            </Switch>
        </div>
    )
}