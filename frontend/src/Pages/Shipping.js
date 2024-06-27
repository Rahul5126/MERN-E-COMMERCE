import React from 'react'
import './CSS/Shipping.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcAmex, faCcMastercard, faCcDiscover } from '@fortawesome/free-brands-svg-icons';
import { faUser, faEnvelope, faAddressCard, faInstitution, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Shipping = () => {
  return (
    <div className="row">
        <div className="col-75">
            <div className="container">
                <form action="/action_page.php">

                    <div className="row">
                        <div className="col-50">
                            <h3>Billing Address</h3>
                            <label for="fname"><FontAwesomeIcon icon={faUser} /> Full Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                            <label for="email"><FontAwesomeIcon icon={faEnvelope} /> Email</label>
                            <input type="text" id="email" name="email" placeholder="john@example.com" />
                            <label for="adr"><FontAwesomeIcon icon={faAddressCard} /> Address</label>
                            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                            <label for="city"><FontAwesomeIcon icon={faInstitution} /> City</label>
                            <input type="text" id="city" name="city" placeholder="New York" />
                            <label for="state">State</label>
                            <input type="text" id="state" name="state" placeholder="NY" />
                            <label for="zip">Zip</label>
                            <input type="text" id="zip" name="zip" placeholder="10001" />
                        </div>

                        <div className="col-50">
                            <h3>Payment</h3>
                            <label for="fname">Accepted Cards</label>
                            <div className="icon-container">
                                <FontAwesomeIcon icon={faCcVisa} className='icon-container-item' style={{ color: 'navy' }} />
                                <FontAwesomeIcon icon={faCcAmex} className='icon-container-item' style={{ color: 'blue' }} />
                                <FontAwesomeIcon icon={faCcMastercard} className='icon-container-item' style={{ color: 'red' }} />
                                <FontAwesomeIcon icon={faCcDiscover} className='icon-container-item' style={{ color: 'orange' }} />
                            </div>
                            <label for="cname">Name on Card</label>
                            <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                            <label for="ccnum">Credit card number</label>
                            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                            <label for="expmonth">Exp Month</label>
                            <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                            <label for="expyear">Exp Year</label>
                            <input type="text" id="expyear" name="expyear" placeholder="2018" />
                            <label for="cvv">CVV</label>
                            <input type="text" id="cvv" name="cvv" placeholder="352" />

                            
                        </div>
                    </div>
                    <label>
                        <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
                    </label>
                    <input type="submit" value="Continue to Checkout" className="btn" />
                </form>
            </div>
        </div>

        <div className="col-25">
            <div className="container">
                <h4>Cart
                    <span className="price" style={{color: 'black'}}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <b>4</b>
                    </span>
                </h4>
                <p><a href="#a">Product 1</a> <span className="price">$15</span></p>
                <p><a href="#a">Product 2</a> <span className="price">$5</span></p>
                <p><a href="#a">Product 3</a> <span className="price">$8</span></p>
                <p><a href="#a">Product 4</a> <span className="price">$2</span></p>
                <hr />
                <p>Total <span className="price" style={{color: 'black'}} ><b>$30</b></span></p>
            </div>
        </div>
    </div>

  )
}

export default Shipping