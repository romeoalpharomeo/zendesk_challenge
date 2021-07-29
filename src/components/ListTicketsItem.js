import React from 'react';
import { Link } from '@reach/router';
import './ListTicketsItem.css'

const ListTicketsItem = (props) => {
    return (
        <div className="ticketItem" >
            <div>
                <h2>{props.ticket.subject}</h2>
                <p>Ticket ID: {props.ticket.id}</p>
            </div>
            <Link to={`/tickets/${props.ticket.id}`} className="btn btn-info m-2">View Ticket</Link>
        </div>
    );
};



export default ListTicketsItem;