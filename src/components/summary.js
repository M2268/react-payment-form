import React, { Component} from 'react';
import iconMinus from '../img/icon-minus.svg';
import iconPlus from '../img/icon-plus.svg';
import picItem from '../img/pic-item.png';

class Summary extends Component{
    constructor(props){
        super(props);
        this.state = {
            price: 300,
            shipping: 20,
            itemFirstAmount: 1,
            itemSecondAmount: 1,
            name: 'Acme product name'
        };
    };





    render(){
        return(
            <div className="section">
                <div className="subtitle">
                    <span>YOUR ORDER</span>
                </div>
                <div className="cart">
                    <div className="item">
                        <div className="image"><img src={picItem} /></div>
                        <div className="specs">
                            <div className="name"><span>{this.state.name}</span></div>
                            <div className="counter">
                                <div className="image"><img src={iconMinus} /></div>
                                <span>{this.state.itemFirstAmount}</span>
                                <div className="image"><img src={iconPlus} /></div>
                            </div>
                            <div className="item">
                                <div><span>Price</span></div>
                                <div><span>${this.state.price.toFixed(2)}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image"><img src={picItem} /></div>
                        <div className="specs">
                            <div className="name"><span>{this.state.name}</span></div>
                            <div className="counter">
                                <div className="image"><img src={iconMinus} /></div>
                                <span>{this.state.itemSecondAmount}</span>
                                <div className="image"><img src={iconPlus} /></div>
                            </div>
                            <div className="item">
                                <div><span>Price</span></div>
                                <div><span>${this.state.price.toFixed(2)}</span></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="subtitle">
                    <span>ORDER SUMMARY</span>
                </div>
                <div className="summary">
                    <div className="item">
                        <div><span>Subtotal</span></div>
                        <div><span>${(this.state.price * (this.state.itemFirstAmount + this.state.itemSecondAmount)).toFixed(2)}</span></div>
                    </div>
                    <div className="item">
                        <div><span>Shipping</span></div>
                        <div><span>${this.state.shipping.toFixed(2)}</span></div>
                    </div>
                    <hr />
                    <div className="item">
                        <div><span>Total</span></div>
                        <div><span>${(this.state.shipping + this.state.price * (this.state.itemFirstAmount + this.state.itemSecondAmount)).toFixed(2)}</span></div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Summary