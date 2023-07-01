import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';

const Details = () => {
    // const [creature,setCreature]=useState()
    const [data,setData]=useState(
      powers,
      types,

    )
    const [powers,setPowers]=useState()
    const [types,setTypes]=useState()
    const [height,setHeight]=useState()
    const [weight,setWeight]=useState()
    const {index,name} = useParams();
    const fetchDetails=()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${index+1}`)
        .then(res=>res.json())
        .then(data=>{
          setPowers(data.abilities)
          setTypes(data.types)
          setHeight(data.height)
          setWeight(data.weight)
        })
    }
    // const name = params
    // console.log(index)

    useEffect(()=>{
        fetchDetails();
    },[])
    console.log(types)
    // console.log(powers[1].ability.name)

  return (
    <div className='main'>
        <h1>pokemon {index} - {name}</h1>
        <h2>Abiliities</h2>
        <div className='box'>
          {powers?.map((list,id)=>(
            <div key={id} className='card'>{list.ability.name}</div>
          ))}
        </div>
        <h2>Types</h2>
        <div className='box'>
          {types?.map((list,id)=>(
            <div key={id} className='card'>{list.type.name}</div>
          ))}
        </div>
        <h2>Height - {height}</h2>
        <h2>Weight - {weight}</h2>
    </div>
  )
}

export default Details