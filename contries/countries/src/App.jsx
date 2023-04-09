import { useState,useEffect } from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import './App.css';

function App() {
 
  const [countries,setContries]=useState([]);
  const [search,setSearch]=useState("");
  useEffect(()=>{
    async function fetchData(){
        const response= await axios.get("https://restcountries.com/v3.1/all");
        setContries(response.data);
        
    };
    fetchData();
  },[])
  console.log(countries);
  return (
    <div className="App">

       <input  type="text" placeholder='search...'
         value={search} onChange={(e)=>{
           setSearch(e.target.value);
         }}
       />
       <br />
         {countries.filter(country=>{
            return country.name.common.toLowerCase().includes(search.toLowerCase());
         }).map(
          (country)=>{
            
             return(
               <div key={country.name.common}>
               <Link to={`/detailcountry/${country.ccn3}`}>
                   <img src={country.flags.svg} alt=""  width="200" height="200"/> 
               </Link>
                <p>{country.name.common}</p>
               </div>
               
             )
          }
         )}

    </div>
  )
}

export default App
