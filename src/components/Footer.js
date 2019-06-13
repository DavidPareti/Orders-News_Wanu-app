import React from 'react';
import AnimationButton from './AnimationButton';
import menu from '../img/menu.svg';
import shoppingBag from '../img/shopping-bag.svg';
import shoppingBagFull from '../img/shopping-bag-full.svg';
import news from '../img/news.svg';

class Footer extends React.Component {
    constructor(props){
        super(props)
        var cart = JSON.parse(localStorage.getItem("cart"));
       if (cart && cart.cartState){
        document.body.classList.add('cart_full');
       }
    }
    render() {
       return(
            <div className="container-footer">
                <div className="bgc-footer-left"></div>
                <ul>
                    <li>
                        <AnimationButton styleClass="footerButton" images={menu} href="/Menu">Menù</AnimationButton>
                    </li>
                    <li>
                        <AnimationButton styleClass="footerButton empty" images={shoppingBag} href="/Orders">Ordini</AnimationButton>
                        <AnimationButton styleClass="footerButton full" images={shoppingBagFull} href="/Orders">Ordini</AnimationButton>
                    </li>
                    <li>
                        <AnimationButton styleClass="footerButton" images={news} href="/News">News</AnimationButton>
                    </li>
                </ul>
           </div>
        );
    }
}

export default Footer;