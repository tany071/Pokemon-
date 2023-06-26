import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';

const Details = () => {
    const [creature,setCreature]=useState()
    const {index,name} = useParams();
    const fetchDetails=()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then(res=>res.json())
        .then(data=>setCreature(data))
    }
    // const name = params
    console.log(index)

    useEffect(()=>{
        fetchDetails();
    },[])
    console.log(creature)

  return (
    <div>
        <h1>pokemon {index} - {name}</h1>
        <div>{}</div>
    </div>
  )
}

export default Details