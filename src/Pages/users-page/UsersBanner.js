import React from 'react';
import banner from '../../images/banner.jpg';
import {Link} from "react-scroll";


class UsersBanner extends React.Component {

    render() {

        return (
            <div className="header">
                <div className="header__banner-container">
                    <img className="header__banner-image" src={banner} width="960" height="637"
                         alt="Фоновое изображение"/>
                </div>
                <div className="header__banner-image-shadow-glass"/>
                <h2 className="header__head-first-text">In this place will be located the main text of Arrow-app</h2>
                <p className="header__line-top">______________________________________________________________________</p>
                <p className="header__line-bottom">______________________________________________________________________</p>
                <h3 className="header__head-second-text">This place is for subtitle text of Arrow-app</h3>
                <Link className="header__button-scroll-to" activeClass="active" smooth={true} offset={-70}
                      duration={800} to="header__to-body-link" href={"#header__to-body-link"}>Подробнее...</Link>
                <a className="header__to-body-link" id="header__to-body-link" href={"#header__to-body-link"}>
                    header scroll to body anchor</a>
            </div>
        );
    }
}

export default UsersBanner;
