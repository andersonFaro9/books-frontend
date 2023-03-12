

import { url } from 'inspector';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'

import {api} from './api/api'

type IDescription = {
    
    id:string;
    title:string;
    description:string;
    year:string;
    author:string;
    bar_code:string;
}

type Id = {
  id:string;
}

export default function Details () {
    
    const [details, setDetails] = useState<IDescription[]>([])
    
    
    
    const [id] = useState<Id[]>([])

    useEffect( ()=>{
        getDetails()
    },[])
    
    async function getDetails () {
         
      try {
        const response = await api.get(`/books`, {
          params: {
            id,
            
          },
        })
        setDetails(response.data)
      
        
      }
      catch(error) {
        console.log(error)
      }
  
    }

    if (!details) {
      return <div>carregando...</div>
    }

    return (
      <div>
        {details.map((item)=>
            (<li key = {item.id}>
              
                <p>{item.description}</p>
            </li>
        ))}
        
      </div>
    )
}


