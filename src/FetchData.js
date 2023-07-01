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

                <div key={index+1}>{list.name}</div>
                <Link to={`/${index+1}/${list.name}`}>View More</Link>
                </div>
            </div>
  
            ))}
    </div>
         
        
    </div>
  )
}

export default FetchData