import React from 'react';
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import Bookings from './Booking';

function BookingPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
               
                <h1>Previous Bookings</h1>
            </div>
            <Bookings 
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="$30 / night"
                
                />
            <Bookings
                img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location="Private room in center of London"
                title="Independant luxury studio apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                star={4.3}
                price="$40 / night"
                
            />

           
        </div>
    )
}

export default BookingPage
