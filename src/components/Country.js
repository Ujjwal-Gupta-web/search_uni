import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from './Card';
import Navbar from './Navbar';


const Country = () => {
    const [data, setdata] = useState([])
    const [content, setcontent] = useState(<>Select a country to see universities present there<hr /></>);

    const { country } = useParams();

    //to fetch data according to the country
    async function getData(country) {
        setdata([]);
        setcontent(<>Loading...<hr /></>);
        // const final = await fetch(`http://universities.hipolabs.com/search?country=${country}`, {
        //     method: "GET",
        //     headers: {
        //         'Content-type': 'application/json',
        //     }
        // });
        const final = await fetch(`search.json`, {
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
        setdata(result);
        setcontent(<>Total Universities Found : {result.length} in {country}<hr /></>);

    }

    //to call the api once the page is renderred
    useEffect(() => {
        getData(country);
    },[country])

    document.title = `${country} - SearchUni`;

    return (
        <div>
            <Navbar />

            {/* show stats */}
            <div className="my-2 mx-2">
                <h4>{content}</h4>
            </div>

            {/* displays cards of colleges if array returned by api has length>0 */}
            <div className='container' style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", flexWrap: "wrap", maginTop: "20px" }}>
                {(data.length > 0)
                    ?
                    (data.map((clg => <>
                        <Card cardObj={clg} />
                    </>)))
                    :
                    ""
                }
            </div>

        </div>
    );
}
export default Country
