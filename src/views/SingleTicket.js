import React, {useState, useEffect} from 'react';
import {encode as base64_encode} from 'base-64';
import axios from 'axios';
import { Link } from '@reach/router';
import './SingleTicket.css'

const SingleTicket = (props) => {
    const [ticketDetails, setTicketDetails] = useState({})
    // const [loading, setLoading] = useState(false);
    const [isAvailable ,setIsAvailable] = useState(true)
    let encoded = base64_encode('ryanrey0333@gmail.com:romeoalpha123!');

    useEffect(()=>{
        // setLoading(true)
        axios
            .get(`https://zccryanreynolds.zendesk.com/api/v2/tickets/${props.id}`, {
                headers: { 'Authorization': `Basic ${encoded}`}
            })
            .then(res=>{
                console.log("Retrieving ticket...")
                console.log(res)
                console.log("Got it.")
                setIsAvailable(true)
                setTicketDetails(res.data.ticket)
                // setLoading(false)
            })
            .catch(err=>{
                setIsAvailable(false)
                alert("Zendesk API currently unavailable. Please try again later. " + err)
                console.log(err)
            })
    }, [props.id, encoded])
    return (
        <div className="singleTicket" >
                <div data-testid="singleTicket" >
                    <div className="ticketBox">
                    <label className="label" >Subject</label>
                    <h1>{ticketDetails.subject}</h1>
                    </div>
                    <div className="ticketBox">
                    <label>Ticket ID</label>
                    <h4>{ticketDetails.id}</h4>
                    </div>
                    <div className="ticketBox">
                    <label className="label">Description</label>
                    <p>{ticketDetails.description}</p>
                    </div>
                </div>
            <Link to={`/`} className="btn btn-secondary m-2">Back to All Tickets</Link>
        </div>
    );
};

export default SingleTicket;