import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';

const Nosotros = () => {
  const [equipo, setEquipo] = useState([]);

  useEffect(() => {
     obtenerData();
   
  }, [])

 const obtenerData = async() => {
  const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
  const dataToJson =  await data.json();
  setEquipo(dataToJson.civilizations);
 }

  
    
  return (
    <>
    <h1>Nosotros</h1>
    <ul>
        {
          equipo.map(res => (
            
              <li key={res.id}>
                <Link to={`/nosotros/${res.id}`}>
                  {res.name}--{res.expansion}
                </Link>
              </li>
          ))
        }
    </ul>
    </>
  )
}

export default Nosotros