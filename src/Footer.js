import React from 'react';
import AnimationButton from './AnimationButton';


class Footer extends React.Component {
    
    render() {
       return(
            <div className="container-footer">
                <div className="bgc-footer-left"></div>
                <ul>
                    <li>
                        <AnimationButton styleClass="footerButton">Menù</AnimationButton>
                    </li>
                    <li>
                        <AnimationButton styleClass="footerButton">Ordini</AnimationButton>
                    </li>
                    <li>
                        <AnimationButton styleClass="footerButton">News</AnimationButton>
                    </li>
                </ul>
           </div>
        );
    }
}

export default Footer;
