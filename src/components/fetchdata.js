import React ,{useState,useEffect}from 'react';
 import axios from "axios";

const Fetchdata = () => {
    const[profiles,setProfiles] =useState([]);
     
    const getProfile = () =>{

        const config ={
            headers :{
                "Content-Type" :"application/json",
                authorization:"Access-Control-Allow-Origin"
            }
        }
        
        try{
            axios.get("https://mern-backend-n742.onrender.com/contact",config)
            .then((res) => {
                let profiles =res.data;
                setProfiles(profiles)
            });
           
          
         
        }catch(error){
console.log(error);
        }
    };
    useEffect(()=>{
        getProfile();
    },[]);
  return (
  <>
  <ul>
      {profiles.length > 0 ? (
          profiles.map((pro)=>
          <>
          <li key={pro.id} style={{listStyleType:"none"}}>
              <p>Frist Name :   {pro.firstname}</p>
       
          <p  style={{listStyleType:"none"}}>LastName :   {pro.lastname}</p>
          <p  style={{listStyleType:"none"}}> Email :   {pro.email}</p>
          <p  style={{listStyleType:"none"}}>Company :   {pro.company}</p>
           <p  style={{listStyleType:"none"}}>Phone :   {pro.phone}</p>
          </li>
          </>
         
    )) : <h2>No profile fround</h2>

}
  </ul>
  </>
  )
}

export default Fetchdata ;