import React from "react";
import { useState,useEffect } from 'react'
import axios from "axios";
import {useParams,useNavigate} from "react-router-dom";

export const DetailCountry=()=>{
    const location=useParams();
    const navigate=useNavigate();
    const [countryDetail,setCountryDetail]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const response= await axios.get(`https://restcountries.com/v3.1/alpha/${location.id}`);
            setCountryDetail(response.data);
            
        };
        fetchData();
      },[])
      
    return <div>
         {countryDetail[0] &&  <div>Capital is {countryDetail[0].capital}</div>  }
         {countryDetail[0] &&  <div>Population is {countryDetail[0].population}</div>  }
         <br />
         {countryDetail[0] &&   <button type="button"
         onClick={()=>{
            navigate(-1) //1 step back
            // navigate("/")
         }}
        >Back</button>  }
       
           
      
    </div>
}