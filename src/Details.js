import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';

const Details = () => {
    const [creature,setCreature]=useState()
    const [powers,setPowers]=useState()
    const {index,name} = useParams();
    const fetchDetails=()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${index+1}`)
        .then(res=>res.json())
        .then(data=>setPowers(data.abilities))
    }
    // const name = params
    // console.log(index)

    useEffect(()=>{
        fetchDetails();
    },[])
    // console.log(powers[1].ability.name)

  return (
    <div>
        <h1>pokemon {index} - {name}</h1>
        <div>
          {powers?.map((list,id)=>(
            <div key={id}>{list.ability.name}</div>
          ))}

        </div>
    </div>
  )
}

export default Details