import React, { useState, useEffect, useRef, ReactElement } from "react";
import axios from 'axios'
import { v4 as uuid_v4 } from "uuid";

type Props = {};

function Locality({}: Props) {

  {/**regex pour match code postaux français */}
  const postalCodeFr = /^(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}$/

  const input = useRef<HTMLInputElement>(null)
  const cityInput = useRef<HTMLSelectElement>(null)

  const [city, setCity] = useState('');
  const [isFetching, setIsFetching] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)


  const fetchCity = (item:string) => {
    const baseUrl = `https://geo.api.gouv.fr/communes?codePostal=${item}&format=geojson`
    setIsFetching(true)
    axios.get(baseUrl)
   .then((res)=>{setResult(res.data)})
   .catch((err)=> { console.log(err)})
  }

  const options = ()=>{
    if(!postalCodeFr.test(city) || !result){
      return(
        <option value='nofetch'>--choisir une ville</option>
      )
    } else {
      return(
        result.features.map(item =>(<option key={uuid_v4()} value={`${item.properties.nom}`}>{item.properties.nom}</option>))
      )
    }
    }

  useEffect(() => {
   postalCodeFr.test(city)&& fetchCity(city)
  }, [city])
  

  return (
    <form className="w-full flex items-center justify-center p-4" onSubmit={(e)=>e.preventDefault()} >
      <div className=" border-2 rounded-l-md bg-gray-200 p-1 ">
      
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12  "
        >
          <path
            fillRule="evenodd"
            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className={`${postalCodeFr.test(city) ? 'border-gray-200' : 'border-red-500'} flex-1 max-w-[500px] flex flex-col gap-2 justify-center items-center  border-y-2 `}>

      <input
        ref= {input}
        list="city"
        type="text"
        placeholder={`Code postale, France`}
        className='w-full flex items-center justify-center text-center'

        onChange={()=>{setCity(input.current.value)}}
      />
      <select ref={cityInput} name="city" id="city" className="w-full">
        <>{options()}</>
      </select>
      </div>

      <button className=" bg-blue-600 border-2 border-blue-600 rounded-r-md p-1" type="submit" onClick={()=>{console.log(cityInput.current.value)}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12 text-white  "
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      
    </form>
  );
}

export default Locality;