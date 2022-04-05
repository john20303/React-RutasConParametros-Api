import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Civilizacion = () => {

    const {id} = useParams();
    const [pueblo, setPueblo] = useState([]);

    useEffect(() => {
        const obtenerData = async() => {
         const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`);
         const dataToJson =  await data.json();
         setPueblo(dataToJson);
        }
        obtenerData();
     }, [id])
   
    
    

   

  return (
    <>
    <h1>{pueblo.name}</h1>
    <span>{pueblo.team_bonus}</span>
    </>
  )
}

export default Civilizacion