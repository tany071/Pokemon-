import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
// import Details from './Details';

const FetchData = () => {

    const [records,setRecords]=useState([])
    const url='https://pokeapi.co/api/v2/pokemon'

    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>setRecords(data.results))
        .catch(err=>console.log(err))

    },[])
  return (
    <div className="main">
      <h1>Pokemon</h1>      
    <div className='box'>
        {records.map((list,index)=>(
            <div >
                <div className='card'>

                <div key={index}>{list.name}</div>
                <Link to={`/${index}/${list.name}`}>View More</Link>
                {/* <Link>View More</Link> */}
                </div>
            </div>
            // onClick={`list.url+/${index}`}
            ))}
    </div>
         
        
    </div>
  )
}

export default FetchData