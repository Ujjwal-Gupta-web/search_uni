import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';


const UniDetails = () => {
    const [obj, setObj] = useState([]);
    let { country, university } = useParams();

    async function getData(country) {
    
        const final = await fetch("/search.json", {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
            }
        });
        var result = await final.json();
        result=result.filter(data=>data.country===country);
        if ((result.length % 2) === 0) {
            result = result.slice(0, (result.length / 2));
        }
        else {
            result = result.slice(0, (result.length / 2) + 1);
        }
        setObj(result);

    }

    // to fetch data from api , only once
    useEffect(() => {
       getData(country);
    },[country])

    //to get the desired colleges from the list of colleges provided by api
    const college = obj.filter(data => data.name === university);

    document.title = `${university} - SearchUni`;

    return (<>

    <Navbar />

        <div className='container my-5'>
        <Link to={"/"+country} className='btn mb-3' style={{background: "#91b3fa" , color: "black" , fontWeight:"500"}}>Go back and Explore more Universities in {country}</Link>
            {(college.length > 0)
                ?
                (<>
                    <div className="card mb-3">

                        <div className="card-body">
                            <h4 className="card-title">{college[0].name}</h4>
                            <p className="card-text">{college[0]["state-province"]}</p>
                            <p className="card-text">{college[0].country} - {college[0].alpha_two_code}</p>
                            <p className="card-text"><small className="text-muted"><a href={college[0].web_pages[0]} target="_blank" rel='noreferrer' className="text-success">Visit Official Website</a></small></p>
                        </div>
                    </div>

                </>
                )
                :
                <h5>Loading....</h5>
            }
        </div>
    </>

    )
}

export default UniDetails
