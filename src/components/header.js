import React, { Component} from 'react';
import bag from '../img/icon-bag.svg';
import iconHamburger from '../img/icon-hamburger.svg';

class Header extends Component{
    constructor(props){
        super(props);
    }
handleMobileMenu() {
    document.getElementById("mobile-menu").style.display = document.getElementById("mobile-menu").style.display == "block" ? "none" : "block";
}
    render(){
        return(
            <header>
                <div className="container">
                    <div className="header">
                        <nav className="mobile">
                            <button onClick={this.handleMobileMenu} >toggle</button><span className="bold">Menu</span>
                            <div id="mobile-menu">
                                <a className="bold" href="#">Women</a>
                                <a className="bold" href="#">Men</a>
                                <a className="bold" href="#">Accesories</a>
                                <a className="bold" href="#">Shoes</a>
                            </div>
                        </nav>
                        <div className="bag"><img src={bag}/><span>2</span></div>
                        <h1>ACME STORE</h1>
                    </div>
                    <nav className="desktop">
                        <a className="bold" href="#">Women</a>
                        <a className="bold" href="#">Men</a>
                        <a className="bold" href="#">Accesories</a>
                        <a className="bold" href="#">Shoes</a>
                    </nav>


                </div>
            </header>
        );
    }
}

export default Header