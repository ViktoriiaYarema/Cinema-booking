import React from "react";
import Seat from './Seat';
import { OverlayTrigger, Tooltip, } from 'react-bootstrap';
import apiSeats from '../apiSeats';

const Hall = props => {
    return (
        <div className = "Hall">
            <h2>Seats</h2>
            <div className = "seats-hall">                
            { 
                apiSeats.map((item, index) => {
                    return (
                        <OverlayTrigger
                            key = {index}
                            placement="top"
                            delay={{ show: 250, hide: 100 }}
                            overlay=
                            {
                                <Tooltip id="seat-tooltip" key = {index}>
                                    <p>price :  {item.price}$</p>
                                    <p>row : {item.row} </p>
                                    <p>seat : {item.seatNum}</p> 
                                </Tooltip>
                            }>
                                <div  key = {index}>
                                    <Seat
                                        key = {index}
                                        id = {index}
                                        price = {item.price}
                                        row = {item.row}
                                        seatNum = {item.seatNum}
                                        completed = {item.completed}
                                        bookingSeats = {props.bookingSeats}
                                        removeSeats = {props.removeSeats}
                                        bookedSeatsData = {props.bookedSeatsData}
                                    />
                                </div>                        
                        </OverlayTrigger>               
                    )
                })
            }
            </div>       
        </div>
    )
}

export default Hall;