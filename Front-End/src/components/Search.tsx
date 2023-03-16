import React, { useState } from 'react';
import './Search.css';
//import 'react-date-range'
//import 'react-date-range/dist/styles.css'
//import 'react-date-range/dist/theme/default.css';
//import 'react-date-range/src/components/DateRangePicker/index.js';
import { Button } from "@material-ui/core";
import PeopleIcon from '@material-ui/icons/People';
import { Navigate, useNavigate } from "react-router-dom";


function Search() {
    const history = useNavigate();
    function handleClick(){
        history('/search')
    }
    //const [startDate, setStartDate] = useState(new Date());
   // const [endDate, setEndDate] = useState(new Date());

    // const selectionRange = {
       // startDate: startDate,
        //endDate: endDate,
        //key: "selection",
    //};

   // const handleSelect = (ranges) => {
     //   setStartDate(ranges.selection.startDate);
       // setEndDate(ranges.selection.endDate);
    //}

    return (
        <div className="search">
                <h2>
                    Number of guests
                    <PeopleIcon />
                </h2>
                <input min={0} defaultValue={2} type="number" />
                <Button onClick={handleClick}>Search Airbnb</Button>
        </div>

    )
}

export default Search;
