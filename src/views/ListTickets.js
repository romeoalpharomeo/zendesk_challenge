import React, {useState, useEffect} from 'react';
import {encode as base64_encode} from 'base-64';
import axios from 'axios';
import ListTicketsItem from '../components/ListTicketsItem';
// import Pagination from '../components/Pagination';
import './ListTickets.css';

const ListTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [ticketsPerPage] = useState(25)
    const [isAvailable, setIsAvailable] = useState(true)
    const [firstPage, setFirstPage] = useState(0);
    const [hasMore, setHasMore] = useState(true)
    // let encoded = base64_encode('ryanrey0333@gmail.com:romeoalpha123!');
    const [home] = useState(true)


    useEffect(()=>{
        setLoading(true);
        // axios
        //     .get('https://zccryanreynolds.zendesk.com/api/v2/tickets.json?page[size]=25', {
        //         headers: { 
        //             'Authorization': `Basic ${encoded}`,
        //         }
        //     })
        //     .then(res => {
        //         setIsAvailable(true)
        //         console.log(res)
        //         setTickets(res.data.tickets)
        //         setLinks(res.data.links)
        //         console.log("Tickets set...")
        //         setLoading(false)
        //     })
        //     .catch(err=>{
        //         setIsAvailable(false)
        //         alert("Zendesk API currently unavailable. Please try again later. " + err)
        //         console.log(err)
        //     })
            axios.get('http://localhost:8000/api/home')
                .then(res => {
                    setIsAvailable(true)
                    console.log(res.data)
                    setTickets(res.data.results.tickets)
                    setLinks(res.data.results.links)
                    console.log("Tickets set...")
                    setLoading(false)
            })
                .catch(err=>{
                    setIsAvailable(false)
                    alert("Zendesk API currently unavailable. Please try again later. " + err)
                    console.log(err)
            })
    }, [home])

    const pageHandler = (event, linkTo) => {
        setLoading(true);
        axios
            .post('http://localhost:8000/api/pages', {
            linkTo,
        })
            .then(res => {
                setIsAvailable(true)
                console.log(res.data)
                setTickets(res.data.results.tickets)
                setFirstPage(res.data.results.tickets[0].id)
                console.log(firstPage)
                setHasMore(res.data.results.meta.has_more)
                console.log(hasMore)
                setLinks(res.data.results.links)
                console.log("Tickets set...")
                setLoading(false)
            })
            .catch(err=>{
                setIsAvailable(false)
                alert("Zendesk API currently unavailable. Please try again later. " + err)
                console.log(err)
            })
    }

    // useEffect(() => {
    //     window.scrollTo({ behavior: 'smooth', top: '0px' });
    // }, [currentPage]);

    // const lastTicketIndex = currentPage * ticketsPerPage;
    // const firstTicketIndex = lastTicketIndex - ticketsPerPage;
    // const currentTickets = tickets.slice(firstTicketIndex, lastTicketIndex);
    // const paginate = (pageNumber) => {
    //     setCurrentPage(pageNumber)
    // };

    return (
        <div>
            <h1 className="pageTitle" >All Tickets</h1>
            <div className="ticketBoard" >
            
            { loading ? 
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden"></span>
                </div>
                :
                tickets.map((ticket, idx)=>{
                    return <div key={idx} className="ticketList" >
                                <ul>
                                    <ListTicketsItem ticket={ticket}/>
                                </ul>
                            </div>        
                })
            }
            </div>
            {/* <Pagination ticketsPerPage={ticketsPerPage} totalTickets={tickets.length} paginate={paginate} /> */}
            <div className="pageHandlers">
                {firstPage > 1 ? <button className="btn btn-primary" onClick={(event)=>pageHandler(event, links.prev)}>Prev</button>
                :
                'You are on the First Page'}
            
                {hasMore ? <button className="btn btn-primary" onClick={(event)=>pageHandler(event, links.next)}>Next</button>
                :
                'You are on the Last Page'}
            </div>
        </div>
    );
};



export default ListTickets;