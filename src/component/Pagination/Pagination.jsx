import Pagination from 'react-bootstrap/Pagination'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import "../Pagination/Pagination.scss"

export default function Paginations(props) {

    const[active,setActive]=useState(true);
    const pageNumbers =useState([]);

    const pageinate=(pageNumber)=>{
        setActive(pageNumber)
        props.pageinateNumber(pageNumber)
    } 

    for(let index = 1; index <= Math.ceil(props.totalPosts / props.postPerPage);index++)
    {
        pageNumbers.push(index);
        console.log("pageNumbers",pageNumbers[1])
    }

    return (
        <div className="pageInition">
        {
            pageNumbers.map((number) => (
                <div key={number}>
                <Pagination className="Paginations">
                    <Pagination.Item onClick={() => pageinate(number)} active={number == active}>
                    {number}
                    </Pagination.Item>
                    </Pagination>
                    </div>
                ))
            }
        </div>
    )
}