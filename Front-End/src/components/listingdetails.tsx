import React from 'react';
import './List.css';
import StarIcon from '@material-ui/icons/Star';
import 'bootstrap/dist/css/bootstrap.css';



function ListDetails() {
    return (

        
        <div className="row">
            <div className="heading">
                <h1>Details of the Stay</h1>
                <h5>________________________________________________________________________________</h5>
            </div>
            <div className="leftcolumn">
                <div className="card">
                    <h2 style={{textAlign: "left"}}>Independant luxury studio apartment</h2>
                    <h5 style={{textAlign: "left"}}>100 Punta Nizuc Rd., Cancún, Mexico</h5>
                    <div className="fakeimg"><img src="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg" width="100%" height="500px"/></div>
                    <br></br><div className="description">   
                    <br></br><h6>About this Stay</h6>
                        <p>Unique "glamping" experience! Beautiful tiny home, designed by an architect, set on the hillside in rural Ontario, just 4 K from the artsy town of Warkworth. 30 acres with walking trails through the woods, outhouse, (An outhouse is a small structure, separate from a main building, which covers a toilet, with no plumbing.) warm water outdoor shower, (not available in the winter),large deck for star gazing, fire pit (depending on the season),small cooling off pool in summer, beautiful property.</p>
                        <br></br><h6>Amenities</h6>
                        <p>1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine</p>
                    </div>
                    <br></br><div className='maps'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5640523779043!2d-86.7500005!3d21.129939699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2899a4adf74f%3A0xda67d77b477f280d!2sPunta%20Nizuc%20-%20Canc%C3%BAn%20100%2C%20Punta%20Cancun%2C%20Zona%20Hotelera%2C%2077500%20Canc%C3%BAn%2C%20Q.R.%2C%20Mexico!5e0!3m2!1sen!2sca!4v1677051662218!5m2!1sen!2sca" width="1000" height="450" style={{border:"0"}} loading="lazy"></iframe></div>
                    <br></br><div className="Reviews" style={{textAlign: "left"}}>
                    <h4>Reviews</h4>    
                    <StarIcon className="searchResult__star" /><StarIcon className="searchResult__star" /><StarIcon className="searchResult__star" />
                    </div>
                </div>
                
            </div>
            <div className="rightcolumn">
                <div className="card">
                    <h2>$40/night</h2><br></br>
                    <h5 style={{textAlign:"center"}}>Check In</h5><br></br>
                    <input type="date" placeholder='Select Date' name='checkin'/><br></br>
                    <h5 style={{textAlign:"center"}}>Check Out</h5><br></br>
                    <input type="date" placeholder='Select Date' name='checkout'/><br></br>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4"><br></br>
                    <button type="submit" className="btn btn-primary btn-lg">Book Now</button>
                  </div>
                </div>
    
            </div>
        </div>
    )
}

export default ListDetails
