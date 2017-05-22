import React, {Component} from 'react';
import iconCollapse from '../img/icon-collapse.svg';
import iconExpand from '../img/icon-expand.svg';


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.handleFNameChange = this.handleFNameChange.bind(this);
        this.handleLNameChange = this.handleLNameChange.bind(this);
        this.handleEMailChange = this.handleEMailChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleCardNumberChange = this.handleCardNumberChange.bind(this);
        this.handleCardHolderChange = this.handleCardHolderChange.bind(this);
        this.handleCVCChange = this.handleCVCChange.bind(this);

    }

    IsValid(v) {
        if (v !== true && v !== undefined)
            return (
                <span className="alert">enter correct data</span>
            )
    }

    notEmptyField(field) {
        if (field != '')
            return true;
        else return false;
    }

    handleFNameChange(e) {
        const fNameValid = this.notEmptyField(e.target.value);
        this.setState({
            fNameValid: fNameValid
        });
    }

    handleLNameChange(e) {
        const lNameValid = this.notEmptyField(e.target.value);
        this.setState({
            lNameValid: lNameValid
        });
    }

    handleEMailChange(e) {
        if (/(.+)@(.+){2,}\.(.+){2,}/.test(e.target.value)) this.setState({
            eMailValid: true
        });
        else this.setState({
            eMailValid: false
        });
    }

    handleAddressChange(e) {
        const addressValid = this.notEmptyField(e.target.value);
        this.setState({
            addressValid: addressValid
        });
    }

    handleZipCodeChange(e) {
        let zipCode = e.target.value;
        if ((/(\d{5}([\-]\d{4})?)/.test(zipCode) && document.getElementById("country").value === 'usa') || (/[0-9]{4}/.test(zipCode) && document.getElementById("country").value === 'au') || (/[0-9]{2}\-[0-9]{3}/.test(zipCode) && document.getElementById("country").value === 'pl')) this.setState({
            zipCodeValid: true
        });
        else this.setState({
            zipCodeValid: false
        });
    }

    handleCityChange(e) {
        const cityValid = this.notEmptyField(e.target.value);
        this.setState({
            cityValid: cityValid
        });
    }

    handleStateChange(e) {
        const stateValid = this.notEmptyField(e.target.value);
        this.setState({
            stateValid: stateValid
        });
    }

    handleCardNumberChange(e) {
        if (/[0-9]{13,16}/.test(e.target.value)) this.setState({
            cardNumberValid: true
        });
        else this.setState({
            cardNumberValid: false
        });
    }

    handleCardHolderChange(e) {
        const cardHolderValid = this.notEmptyField(e.target.value);
        this.setState({
            cardHolderValid: cardHolderValid
        });
    }

    handleCVCChange(e) {
        if (/[0-9]{3,4}$/.test(e.target.value)) this.setState({
            CVCValid: true
        });
        else this.setState({
            CVCValid: false
        });
    }

    submitButton() {
    const isValidated = !this.fNameValid || !this.lNameValid || !this.eMailValid || !this.addressValid || !this.zipCodeValid || !this.cityValid || !this.stateValid || !this.cardNumberValid || !this.cardHolderValid || !this.CVCValid;
    if (!isValidated) {
        return <input type="submit" value="BUY"/>;
    } else
    return <input type="submit" id="disabled" disabled value="BUY"/>;
}

    render() {
        return (


            <div className="section">
                <div className="subtitle">
                    <span>DELIVERY ADDRESS</span>
                </div>
                <form>

                    <label className="required" htmlFor="first-name">FIRST
                        NAME {this.IsValid(this.state.fNameValid)}</label>
                    <input onChange={this.handleFNameChange} className="required" type="text" value={this.state.value}
                           id="first-name"/>

                    <label className="required" htmlFor="last-name">LAST
                        NAME {this.IsValid(this.state.lNameValid)}</label>
                    <input onChange={this.handleLNameChange} className="required" type="text" id="last-name"/>

                    <label className="required" htmlFor="e-mail">E-MAIL {this.IsValid(this.state.eMailValid)}</label>
                    <input onChange={this.handleEMailChange} className="required" type="text" id="e-mail"/>

                    <label htmlFor="phone">PHONE</label>
                    <input type="text" id="phone"/>

                    <label className="required"
                           htmlFor="address">ADDRESS {this.IsValid(this.state.addressValid)}</label>
                    <input onChange={this.handleAddressChange} className="required" type="text" id="address"/>

                    <label htmlFor="address-cont">ADDRESS CONT.</label>
                    <input type="text" id="address-cont"/>

                    <label className="required" htmlFor="zip-code">ZIP
                        CODE {this.IsValid(this.state.zipCodeValid)}</label>
                    <input onChange={this.handleZipCodeChange} className="required" type="text" id="zip-code"/>


                    <label className="required" htmlFor="city">CITY {this.IsValid(this.state.cityValid)}</label>
                    <input onChange={this.handleCityChange} className="required" type="text" id="city"/>


                    <label className="required" htmlFor="state">STATE {this.IsValid(this.state.stateValid)}</label>
                    <input onChange={this.handleStateChange} className="required" type="text" id="state"/>


                    <label className="required"
                           htmlFor="country">COUNTRY</label>
                    <select className="required" id="country"
                            name="country">
                        <option value="pl">Poland</option>
                        <option value="usa">USA</option>
                        <option value="au">Australia</option>
                    </select>

                    <div className="subtitle">
                        <span>PAYMENT</span>
                    </div>

                    <label className="required" htmlFor="card-number">CARD
                        NUMBER {this.IsValid(this.state.cardNumberValid)}</label>
                    <input onChange={this.handleCardNumberChange} className="required" type="text" id="card-number"/>

                    <label className="required" htmlFor="card-holder">CARD
                        HOLDER {this.IsValid(this.state.cardHolderValid)}</label>
                    <input onChange={this.handleCardHolderChange} className="required" type="text" id="card-holder"/>

                    <label className="required" htmlFor="cvc">CVC {this.IsValid(this.state.fCVCValid)}</label>
                    <input onChange={this.handleCVCChange} className="required" type="text" id="cvc"/>

                    {this.submitButton()}

                </form>

            </div>

        );
    }
}

export default Form