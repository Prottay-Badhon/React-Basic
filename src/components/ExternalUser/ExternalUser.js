import { useEffect, useState } from 'react';

function ExternalUsers(){
    const [user,setUser] = useState([]);
  
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUser(data))
    },[])
  
    return(
      
      <>
       {
        user.map(user =>{ 
          const {id, name, username, email, address, phone, website, company}= user;
          return(
            <div>
              <h2>Name:{name}</h2>
            </div>
          )    
        })
       }
        
      </>
    )
  }
  export default ExternalUsers;