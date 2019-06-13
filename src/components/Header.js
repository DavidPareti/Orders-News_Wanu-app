import React from 'react'
import { ReactComponent as ImageLogo } from '../img/image-logo.svg';
import { ReactComponent as Logo } from '../img/logo_wanu.svg';



class Header extends React.Component{
    render(){
    return (
        <div className="container-header">
            <div className="linea-Bianca"></div>
            <a href="/">
                <Logo className="logo"/>
            </a>
            {/* <h3>Tavolo 1</h3> */}
            <ImageLogo className="imageLogo"/>
        </div>
        );
    }
}

export default Header;