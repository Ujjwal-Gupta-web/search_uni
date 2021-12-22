import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ cardObj }) => {
    const link = `/${cardObj.country}/${cardObj.name}`;
    return (
        <div className="card" style={{ width: "18rem", margin: "5px", border: "1px solid #91b3fa" }}>
            <div className="card-body">
                <h5 className="card-text" style={{ height: "100px" }}>{cardObj.name}</h5>
                <a href={cardObj.web_pages[0]} target="_blank" rel='noreferrer' className="text-success">Website</a>
                <Link to={link} style={{ margin: "10px" }} className="text-primary">know more</Link>
            </div>
        </div>
    )
}

export default Card


