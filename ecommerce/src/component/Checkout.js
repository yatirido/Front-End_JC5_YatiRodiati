import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

class Checkout extends Component 
{
    render() 
    {
        return (
           
           <div>
                <Navbar />
                <Header />

  <div className="container">
        <div className="row" style={{paddingTop: 25, paddingBottom: 25}}>
          <div className="col-md-12">
            <div id="mainContentWrapper">
              <div className="col-md-8 col-md-offset-2">
                <h2 style={{textAlign: 'center'}}>
                  Review Your Order &amp; Complete Checkout
                </h2>
                <hr />
                <Link to="#" className="btn btn-info" style={{width: '100%'}}>Add More Products &amp; Services</Link>
                <hr />
                <div className="shopping_cart">
                  <form className="form-horizontal" action method="post" id="payment-form">
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <Link to="#collapseOne" data-toggle="collapse" data-parent="#accordion">Review
                              Your Order</Link>
                          </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse in">
                          <div className="panel-body">
                            <div className="items">
                              <div className="col-md-9">
                                <table className="table table-striped">
                                  <tbody><tr>
                                      <td colSpan={2}>
                                        <Link to="#" className="btn btn-warning btn-sm pull-right"  title="Remove Item">X</Link>
                                        <b>
                                          Order List:</b></td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <ul>
                                          <li>Emma Cooper Clutch</li>
                                          <li>Ryder Crossbody Bag</li>
                                          <li>Fiona Tote Bag</li>
                                        </ul>
                                      </td>
                                      <td>
                                        <b>Rp. 2,950,000</b>
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </div>
                              <div className="col-md-3">
                                <div style={{textAlign: 'center'}}>
                                  <h3>Order Total</h3>
                                  <h3><span style={{color: 'green'}}>Rp. 2,950,000</span></h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <div style={{textAlign: 'center', width: '100%'}}><Link to ="#collapseTwo" style={{width: '100%'}} data-toggle="collapse" data-parent="#accordion"  className=" btn btn-success" onclick="$(this).fadeOut(); $('#payInfo').fadeIn();">Continue
                              to Billing Information»</Link></div>
                        </h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <Link to ="#collapseTwo" data-toggle="collapse" data-parent="#accordion" >Contact
                            and Billing Information</Link>
                        </h4>
                      </div>
                      <div id="collapseTwo" className="panel-collapse collapse">
                        <div className="panel-body">
                          <b>Help us keep your account safe and secure, please verify your billing
                            information.</b>
                          <br /><br />
                          <table className="table table-striped" style={{fontWeight: 'bold'}}>
                            <tbody><tr>
                                <td style={{width: 175}}>
                                  <label htmlFor="id_email">Email:</label></td>
                                <td>
                                  <input className="form-control" id="id_email" name="email" required="required" type="text" />
                                </td>
                              </tr>
                              <tr>
                                <td style={{width: 175}}>
                                  <label htmlFor="id_first_name">First name:</label></td>
                                <td>
                                  <input className="form-control" id="id_first_name" name="first_name" required="required" type="text" />
                                </td>
                              </tr>
                              <tr>
                                <td style={{width: 175}}>
                                  <label htmlFor="id_last_name">Last name:</label></td>
                                <td>
                                  <input className="form-control" id="id_last_name" name="last_name" required="required" type="text" />
                                </td>
                              </tr>
                              <tr>
                                <td style={{width: 175}}>
                                  <label htmlFor="id_address_line_1">Address:</label></td>
                                <td>
                                  <input className="form-control" id="id_address_line_1" name="address_line_1" required="required" type="text" />
                                </td>
                              </tr>
                              <tr>
                                <td style={{width: 175}}>
                                  <label htmlFor="id_address_line_2">Unit / Suite #:</label></td>
                                <td>
                                  <input className="form-control" id="id_address_line_2" name="address_line_2" type="text" />
                                </td>
                              </tr>
                              <tr>
                                <td style={{width: 175}}>
                                  <label htmlFor="id_city">City:</label></td>
                                <td>
                                  <input className="form-control" id="id_city" name="city" required="required" type="text" />
                                </td>
                              </tr>
                              {/* <tr>
                                <td style={{width: 175}}>
                                  <label htmlFor="id_state">State:</label></td>
                                <td>
                                  <select className="form-control" id="id_state" name="state">
                                    <option value="AK">Alaska</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="DC">Washington D.C.</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                  </select>
                                </td>
                              </tr> */}
                              <tr>
                                <td style={{width: 175}}>
                                  <label htmlFor="id_postalcode">Postalcode:</label></td>
                                <td>
                                  <input className="form-control" id="id_postalcode" name="postalcode" required="required" type="text" />
                                </td>
                              </tr>
                              <tr>
                                <td style={{width: 175}}>
                                  <label htmlFor="id_phone">Phone:</label></td>
                                <td>
                                  <input className="form-control" id="id_phone" name="phone" type="text" />
                                </td>
                              </tr>
                            </tbody></table>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <div style={{textAlign: 'center'}}><Link to="#collapseThree" data-toggle="collapse" data-parent="#accordion"  className=" btn   btn-success" id="payInfo" style={{width: '100%', display: 'none'}} onclick="$(this).fadeOut();  
                   document.getElementById('collapseThree').scrollIntoView()">Enter Payment Information »</Link>
                          </div>
                        </h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <Link to ="#collapseThree" data-toggle="collapse" data-parent="#accordion">
                            <b>Payment Information</b>
                          </Link>
                        </h4>
                      </div>
                      <div id="collapseThree" className="panel-collapse collapse">
                        <div className="panel-body">
                          <span className="payment-errors" />
                          <fieldset>
                            <legend>What method would you like to pay with today?</legend>
                            <div className="form-group">
                              <label className="col-sm-3 control-label" htmlFor="card-holder-name">Name on
                                Card</label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" stripe-data="name" id="name-on-card" placeholder="Card Holder's Name" />
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="col-sm-3 control-label" htmlFor="card-number">Card
                                Number</label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" stripe-data="number" id="card-number" placeholder="Debit/Credit Card Number" />
                                <br />
                                <div><img className="pull-right" src="https://s3.amazonaws.com/hiresnetwork/imgs/cc.png" alt="" style={{maxWidth: 250, paddingBottom: 20}} />
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-3 control-label" htmlFor="expiry-month">Expiration
                                  Date</label>
                                <div className="col-sm-9">
                                  <div className="row">
                                    <div className="col-xs-3">
                                      <select className="form-control col-sm-2" data-stripe="exp-month" id="card-exp-month" style={{marginLeft: 5}}>
                                        <option>Month</option>
                                        <option value={1}>Jan (01)</option>
                                        <option value={2}>Feb (02)</option>
                                        <option value={3}>Mar (03)</option>
                                        <option value={4}>Apr (04)</option>
                                        <option value={5}>May (05)</option>
                                        <option value={6}>June (06)</option>
                                        <option value={7}>July (07)</option>
                                        <option value={8}>Aug (08)</option>
                                        <option value={9}>Sep (09)</option>
                                        <option value={10}>Oct (10)</option>
                                        <option value={11}>Nov (11)</option>
                                        <option value={12}>Dec (12)</option>
                                      </select>
                                    </div>
                                    <div className="col-xs-3">
                                      <select className="form-control" data-stripe="exp-year" id="card-exp-year">
                                        <option value={2016}>2016</option>
                                        <option value={2017}>2017</option>
                                        <option value={2018}>2018</option>
                                        <option value={2019}>2019</option>
                                        <option value={2020}>2020</option>
                                        <option value={2021}>2021</option>
                                        <option value={2022}>2022</option>
                                        <option value={2023}>2023</option>
                                        <option value={2024}>2024</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-3 control-label" htmlFor="cvv">Card CVC</label>
                                <div className="col-sm-3">
                                  <input type="text" className="form-control" stripe-data="cvc" id="card-cvc" placeholder="Security Code" />
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="col-sm-offset-3 col-sm-9">
                                </div>
                              </div>
                            </div></fieldset>
                          <button type="submit" className="btn btn-success btn-lg" style={{width: '100%'}}>Pay
                            Now
                          </button>
                          <br />
                          <div style={{textAlign: 'left'}}><br />
                            By submiting this order you are agreeing to our <Link to="/legal/billing/">universal
                              billing agreement</Link>, and <Link to="/legal/terms/">terms of service</Link>.
                            If you have any questions about our products or services please contact us
                            before placing this order.
                          </div>
                        </div>
                      </div>
                    </div>
                  </form></div>
              </div>
            </div>
          </div>
        </div>
      </div>

                <Footer />
            </div>

);
}
}
export default Checkout;
